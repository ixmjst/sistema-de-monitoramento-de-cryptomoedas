import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService, Favorite } from '../../core/services/favorite.service';
import { CryptoService } from '../../core/services/crypto.service';
import { ToastService } from '../../core/services/toast.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  favorites: Favorite[] = [];
  loading = true;

  constructor(
    private favoriteService: FavoriteService,
    private cryptoService: CryptoService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadFavorites(): void {
    this.loading = true;
    this.favoriteService.syncFromApi()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (favorites) => {
          const missingData = favorites.some(
            f => !f.current_price || f.current_price === 0 || !f.image_url
          );
          if (missingData && favorites.length > 0) {
            this.enrichWithPrices(favorites);
          } else {
            this.favorites = favorites;
            this.loading = false;
          }
        },
        error: () => {
          this.favoriteService.getFavorites()
            .pipe(takeUntil(this.destroy$))
            .subscribe(favs => {
              this.favorites = favs;
              this.loading = false;
            });
        }
      });
  }

  private enrichWithPrices(favorites: Favorite[]): void {
    this.cryptoService.getCryptocurrencies(1, 100)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (cryptos) => {
          this.favorites = favorites.map(fav => {
            const match = cryptos.find(c =>
              c.id === fav.crypto_code ||
              c.symbol.toLowerCase() === fav.crypto_code.toLowerCase()
            );
            if (match) {
              return {
                ...fav,
                name: fav.name || match.name,
                symbol: fav.symbol || match.symbol,
                current_price: match.currentPrice,
                price_change_24h: match.priceChange24h,
                image_url: fav.image_url || match.imageUrl
              };
            }
            return fav;
          });
          this.loading = false;
        },
        error: () => {
          this.favorites = favorites;
          this.loading = false;
        }
      });
  }

  removeFavorite(fav: Favorite): void {
    this.favoriteService.removeFavorite(fav.crypto_code).subscribe({
      next: () => {
        this.favorites = this.favorites.filter(f => f.crypto_code !== fav.crypto_code);
        this.toast.success(`${fav.name || fav.crypto_code} removido dos favoritos`);
      },
      error: () => this.toast.error('Erro ao remover favorito')
    });
  }

  viewHistory(fav: Favorite): void {
    this.router.navigate(['/history'], {
      queryParams: { coin: fav.crypto_code }
    });
  }

  trackByCode(_index: number, fav: Favorite): string {
    return fav.crypto_code;
  }

  formatPrice(price: number): string {
    if (!price && price !== 0) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: price < 1 ? 6 : 2
    }).format(price);
  }
}
