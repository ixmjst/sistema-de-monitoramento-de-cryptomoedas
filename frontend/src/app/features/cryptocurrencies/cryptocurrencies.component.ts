import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { CryptoService, Cryptocurrency } from '../../core/services/crypto.service';
import { FavoriteService } from '../../core/services/favorite.service';
import { ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.scss']
})
export class CryptocurrenciesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  cryptos: Cryptocurrency[] = [];
  filteredCryptos: Cryptocurrency[] = [];
  loading = true;
  searchControl = new FormControl('');
  currentPage = 1;
  pageSize = 20;
  sortField = 'marketCap';
  sortDirection: 'asc' | 'desc' = 'desc';
  favoriteIds: Set<string> = new Set();

  constructor(
    private cryptoService: CryptoService,
    private favoriteService: FavoriteService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loadCryptos();
    this.loadFavorites();

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(query => {
      this.filterCryptos(query || '');
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadCryptos(): void {
    this.loading = true;
    this.cryptoService.getCryptocurrencies(this.currentPage, this.pageSize)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (cryptos) => {
          this.cryptos = cryptos;
          this.filteredCryptos = cryptos;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }

  loadFavorites(): void {
    // Subscreve aos favoritos diretamente (BehaviorSubject atualiza em tempo real)
    this.favoriteService.getFavorites().pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (favorites) => {
        this.favoriteIds = new Set(favorites.map(f => f.crypto_code));
      }
    });
  }

  filterCryptos(query: string): void {
    if (!query.trim()) {
      this.filteredCryptos = this.cryptos;
      return;
    }
    const q = query.toLowerCase();
    this.filteredCryptos = this.cryptos.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.symbol.toLowerCase().includes(q)
    );
  }

  sortBy(field: string): void {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'desc';
    }
    this.filteredCryptos = [...this.filteredCryptos].sort((a, b) => {
      const aVal = (a as any)[field] || 0;
      const bVal = (b as any)[field] || 0;
      return this.sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    });
  }

  toggleFavorite(crypto: Cryptocurrency): void {
    const code = crypto.id;
    if (this.favoriteIds.has(code)) {
      this.favoriteService.removeFavorite(code).subscribe({
        next: () => {
          this.favoriteIds.delete(code);
          this.favoriteIds = new Set(this.favoriteIds);
          this.toast.success(`${crypto.name} removido dos favoritos`);
        },
        error: () => this.toast.error('Erro ao remover favorito')
      });
      return;
    }
    // addFavorite agora com nome e símbolo para melhor UX
    this.favoriteService.addFavorite(code, crypto.name, crypto.symbol, crypto.imageUrl).subscribe({
      next: () => {
        this.favoriteIds = new Set(this.favoriteIds).add(code);
        this.toast.success(`${crypto.name} adicionado aos favoritos`);
      },
      error: () => this.toast.error('Erro ao adicionar favorito')
    });
  }

  isFavorite(cryptoId: string): boolean {
    return this.favoriteIds.has(cryptoId);
  }

  trackByCode(_index: number, crypto: Cryptocurrency): string {
    return crypto.id;
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(price);
  }

  formatMarketCap(value: number): string {
    if (!value) return 'N/A';
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toFixed(2)}`;
  }

  getSortIcon(field: string): string {
    if (this.sortField !== field) return '\u2195';
    return this.sortDirection === 'asc' ? '\u2191' : '\u2193';
  }

  getSparklinePoints(crypto: Cryptocurrency, width = 170, height = 48): string {
    const values = crypto.sparkline?.length ? crypto.sparkline.slice(-36) : this.createFallbackSparkline(crypto);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    return values.map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  }

  /**
   * Calcula mudança de preço por hora (estimada como 1/24 da mudança de 24h)
   * Este é um valor estimado baseado no change de 24h, não dados reais
   */
  getHourlyChange(crypto: Cryptocurrency): number {
    return crypto.priceChange24h / 24;
  }

  /**
   * Calcula mudança de preço por semana (estimada como variação média x 7 dias)
   * Este é um valor estimado, não dados reais históricos
   */
  getWeeklyChange(crypto: Cryptocurrency): number {
    // Extrapolação simples: assume que mudança média diária = 24h / 7
    return (crypto.priceChange24h / 24) * 7;
  }

  private createFallbackSparkline(crypto: Cryptocurrency): number[] {
    const base = crypto.currentPrice || 1;
    return Array.from({ length: 36 }, (_, index) => {
      const wave = Math.sin(index / 2.8) * base * 0.015;
      const trend = (crypto.priceChange24h / 100) * base * (index / 35);
      return base + wave + trend;
    });
  }
}
