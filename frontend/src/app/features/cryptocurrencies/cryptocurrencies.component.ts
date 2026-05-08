import { Component, OnInit, OnDestroy } from '@angular/core';
import { CryptoService, Cryptocurrency } from '../../core/services/crypto.service';
import { FavoriteService } from '../../core/services/favorite.service';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

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
  totalItems = 0;
  sortField = 'marketCap';
  sortDirection: 'asc' | 'desc' = 'desc';
  favoriteIds: Set<string> = new Set();

  constructor(
    private cryptoService: CryptoService,
    private favoriteService: FavoriteService
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
    this.favoriteService.getFavorites().pipe(takeUntil(this.destroy$)).subscribe({
      next: (favorites: any[]) => {
        this.favoriteIds = new Set(favorites.map((f: any) => f.cryptoId || f.crypto_id));
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
    if (this.favoriteIds.has(crypto.id)) {
      this.favoriteService.removeFavorite(crypto.id).subscribe(() => {
        this.favoriteIds.delete(crypto.id);
      });
    } else {
      this.favoriteService.addFavorite(crypto.id).subscribe(() => {
        this.favoriteIds.add(crypto.id);
      });
    }
  }

  isFavorite(cryptoId: string): boolean {
    return this.favoriteIds.has(cryptoId);
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
    if (this.sortField !== field) return '↕';
    return this.sortDirection === 'asc' ? '↑' : '↓';
  }
}
