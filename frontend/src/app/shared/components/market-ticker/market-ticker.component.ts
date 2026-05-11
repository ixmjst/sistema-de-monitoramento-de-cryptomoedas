import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { CryptoService } from '../../../core/services/crypto.service';
import { MarketTicker, NewsService } from '../../../core/services/news.service';

@Component({
  selector: 'app-market-ticker',
  templateUrl: './market-ticker.component.html',
  styleUrls: ['./market-ticker.component.scss']
})
export class MarketTickerComponent implements OnInit, OnDestroy {
  marketTicker: MarketTicker | null = null;
  updatedAt: Date | null = null;
  loading = true;

  private destroy$ = new Subject<void>();

  constructor(
    private cryptoService: CryptoService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    timer(0, 45000).pipe(
      switchMap(tick => {
        if (tick > 0) {
          this.cryptoService.clearCache();
        }
        return this.cryptoService.getCryptocurrencies(1, 60);
      }),
      takeUntil(this.destroy$)
    ).subscribe({
      next: cryptos => {
        this.marketTicker = this.newsService.getMarketTicker(cryptos);
        this.updatedAt = new Date();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  formatMarketCap(value: number): string {
    if (!value) return '$0.00';
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toFixed(2)}`;
  }
}
