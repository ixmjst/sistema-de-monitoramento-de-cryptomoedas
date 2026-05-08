import { Component, OnInit, OnDestroy } from '@angular/core';
import { CryptoService, Cryptocurrency } from '../../core/services/crypto.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadDashboardData(): void {
    this.loading = true;
    
    this.cryptoService.getCryptocurrencies(1, 50)
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
          
          this.loading = false;
        },
        error: (err) => {
          console.error('Error loading dashboard data:', err);
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
}
