import { Component, OnInit, OnDestroy } from '@angular/core';
import { CryptoService, Cryptocurrency } from '../../core/services/crypto.service';
import { FavoriteService } from '../../core/services/favorite.service';
import { NewsService, MarketTicker, NewsArticle } from '../../core/services/news.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  loading = true;
  topGainers: Cryptocurrency[] = [];
  topLosers: Cryptocurrency[] = [];
  recentCryptos: Cryptocurrency[] = [];
  totalMarketCap = 0;
  totalVolume24h = 0;
  marketTicker: MarketTicker | null = null;
  favoriteCount = 0;

  globalChange24h = 0;
  topGainerName = '';
  topGainerChange = 0;

  latestNews: NewsArticle[] = [];
  featuredArticles: NewsArticle[] = [];

  constructor(
    private cryptoService: CryptoService,
    private favoriteService: FavoriteService,
    public newsService: NewsService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
    this.loadFavoritesCount();
    this.loadNews();
    this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.newsService.refreshNews();
      this.loadNews();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadNews(): void {
    this.newsService.getLatestNews().pipe(takeUntil(this.destroy$)).subscribe(news => {
      this.latestNews = news;
    });
    this.newsService.getFeaturedArticles().pipe(takeUntil(this.destroy$)).subscribe(articles => {
      this.featuredArticles = articles;
    });
  }

  loadFavoritesCount(): void {
    this.favoriteService.getFavorites().pipe(takeUntil(this.destroy$)).subscribe(favs => {
      this.favoriteCount = favs.length;
    });
  }

  loadDashboardData(): void {
    this.loading = true;

    this.cryptoService.getCryptocurrencies(1, 60)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (cryptos) => {
          this.recentCryptos = cryptos.slice(0, 10);

          this.topGainers = [...cryptos]
            .sort((a, b) => b.priceChange24h - a.priceChange24h)
            .slice(0, 5);

          this.topLosers = [...cryptos]
            .sort((a, b) => a.priceChange24h - b.priceChange24h)
            .slice(0, 5);

          this.totalMarketCap = cryptos.reduce((sum, c) => sum + (c.marketCap || 0), 0);
          this.totalVolume24h = cryptos.reduce((sum, c) => sum + ((c as any).volume24h || 0), 0);
          this.marketTicker = this.newsService.getMarketTicker(cryptos);

          this.globalChange24h = cryptos.reduce((sum, c) => sum + (c.priceChange24h || 0), 0) / cryptos.length;

          if (this.topGainers.length > 0) {
            this.topGainerName = this.topGainers[0].name;
            this.topGainerChange = this.topGainers[0].priceChange24h;
          }

          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
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

  formatMarketCap(value: number): string {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toFixed(2)}`;
  }

  getPriceChangeClass(change: number): string {
    return change >= 0 ? 'positive' : 'negative';
  }

  getSparklinePoints(crypto: Cryptocurrency, width = 150, height = 52): string {
    const values = crypto.sparkline?.length ? crypto.sparkline.slice(-32) : this.createFallbackSparkline(crypto);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    return values.map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  }

  trackByCode(_index: number, crypto: Cryptocurrency): string {
    return crypto.id;
  }

  trackByNewsId(_index: number, article: NewsArticle): string {
    return article.id;
  }

  private createFallbackSparkline(crypto: Cryptocurrency): number[] {
    const base = crypto.currentPrice || 1;
    return Array.from({ length: 32 }, (_, index) => {
      const wave = Math.sin(index / 3) * base * 0.018;
      const trend = (crypto.priceChange24h / 100) * base * (index / 31);
      return base + wave + trend;
    });
  }
}
