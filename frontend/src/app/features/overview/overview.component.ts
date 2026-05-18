import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { CryptoService, Cryptocurrency } from '../../core/services/crypto.service';
import { NewsService, NewsArticle, MarketTicker } from '../../core/services/news.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
    cryptos: Cryptocurrency[] = [];
    filteredCryptos: Cryptocurrency[] = [];
    topGainers: Cryptocurrency[] = [];
    topLosers: Cryptocurrency[] = [];
    loading = true;
    totalMarketCap = 0;
    totalVolume24h = 0;
    searchControl = new FormControl('');
    showScrollTop = false;

    // News & Articles
    latestNews: NewsArticle[] = [];
    featuredArticles: NewsArticle[] = [];
    marketTicker: MarketTicker | null = null;
    currentYear = new Date().getFullYear();

    private destroy$ = new Subject<void>();

    constructor(
        private cryptoService: CryptoService,
        public newsService: NewsService,
        private translate: TranslateService
    ) { }

    ngOnInit(): void {
        this.loadOverview();
        this.loadNews();
        this.translate.onLangChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.newsService.refreshNews();
            this.loadNews();
        });

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

    // Detecta scroll na window (Overview não está dentro do layout-main)
    @HostListener('window:scroll', [])
    onWindowScroll(): void {
        this.showScrollTop = window.scrollY > 400;
    }

    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    loadNews(): void {
        this.newsService.getLatestNews().pipe(takeUntil(this.destroy$)).subscribe(news => {
            this.latestNews = news;
        });
        this.newsService.getFeaturedArticles().pipe(takeUntil(this.destroy$)).subscribe(articles => {
            this.featuredArticles = articles;
        });
    }

    loadOverview(): void {
        this.loading = true;
        this.cryptoService.getCryptocurrencies(1, 60)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (cryptos) => {
                    this.cryptos = cryptos;
                    this.filteredCryptos = cryptos;
                    this.topGainers = [...cryptos]
                        .sort((a, b) => b.priceChange24h - a.priceChange24h)
                        .slice(0, 5);
                    this.topLosers = [...cryptos]
                        .sort((a, b) => a.priceChange24h - b.priceChange24h)
                        .slice(0, 5);
                    this.totalMarketCap = cryptos.reduce((sum, c) => sum + (c.marketCap || 0), 0);
                    this.totalVolume24h = cryptos.reduce((sum, c) => sum + ((c.volume24h || 0)), 0);
                    this.marketTicker = this.newsService.getMarketTicker(cryptos);
                    this.loading = false;
                },
                error: () => {
                    this.loading = false;
                }
            });
    }

    filterCryptos(query: string): void {
        const normalized = query.trim().toLowerCase();
        if (!normalized) {
            this.filteredCryptos = this.cryptos;
            return;
        }
        this.filteredCryptos = this.cryptos.filter(crypto =>
            crypto.name.toLowerCase().includes(normalized) ||
            crypto.symbol.toLowerCase().includes(normalized)
        );
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

    getPriceChangeClass(change: number): string {
        return change >= 0 ? 'positive' : 'negative';
    }

    getSparklinePoints(crypto: Cryptocurrency, width = 150, height = 44): string {
        const values = crypto.sparkline?.length ? crypto.sparkline.slice(-30) : this.createFallbackSparkline(crypto);
        const min = Math.min(...values);
        const max = Math.max(...values);
        const range = max - min || 1;

        return values.map((value, index) => {
            const x = (index / (values.length - 1)) * width;
            const y = height - ((value - min) / range) * height;
            return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(' ');
    }

    private createFallbackSparkline(crypto: Cryptocurrency): number[] {
        const base = crypto.currentPrice || 1;
        return Array.from({ length: 30 }, (_, index) => {
            const wave = Math.sin(index / 2.5) * base * 0.014;
            const trend = (crypto.priceChange24h / 100) * base * (index / 29);
            return base + wave + trend;
        });
    }
}
