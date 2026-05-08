import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoriteService } from '../../core/services/favorite.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  favorites: any[] = [];
  loading = true;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadFavorites(): void {
    this.loading = true;
    this.favoriteService.getFavorites()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (favorites) => {
          this.favorites = favorites;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
  }

  removeFavorite(cryptoId: string): void {
    this.favoriteService.removeFavorite(cryptoId).subscribe(() => {
      this.favorites = this.favorites.filter(f => (f.cryptoId || f.crypto_id) !== cryptoId);
    });
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(price);
  }
}
