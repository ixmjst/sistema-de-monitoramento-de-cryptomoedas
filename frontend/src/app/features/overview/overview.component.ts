import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { CryptoService, Cryptocurrency } from '../../core/services/crypto.service';

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

    private destroy$ = new Subject<void>();

    constructor(private cryptoService: CryptoService) { }

    ngOnInit(): void {
        this.loadOverview();

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
}
