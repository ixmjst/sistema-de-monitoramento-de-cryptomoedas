import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, switchMap } from 'rxjs/operators';
import { ToastService } from '../../core/services/toast.service';
import { CryptoService, Cryptocurrency } from '../../core/services/crypto.service';
import {
  PriceHistoryService,
  PricePoint,
  CoinMetrics,
  Period
} from '../../core/services/price-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // ── Price History ─────────────────────────────────────────────────────────
  searchControl = new FormControl('');
  searchResults: Cryptocurrency[] = [];
  selectedCoin: Cryptocurrency | null = null;
  selectedPeriod: Period = '30';
  pricePoints: PricePoint[] = [];
  coinMetrics: CoinMetrics | null = null;
  loadingChart = false;
  loadingMetrics = false;
  exporting = false;
  chartWidth = 900;
  chartHeight = 220;

  periods: { value: Period; label: string }[] = [
    { value: '1',   label: '24h' },
    { value: '7',   label: '7d'  },
    { value: '30',  label: '30d' },
    { value: '365', label: '1a'  },
  ];

  constructor(
    private toast: ToastService,
    private cryptoService: CryptoService,
    public priceHistoryService: PriceHistoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setupSearch();
    // Verifica se veio com queryParam ?coin=
    const coinParam = this.route.snapshot.queryParamMap.get('coin');
    this.cryptoService.getCryptocurrencies(1, 100).pipe(takeUntil(this.destroy$)).subscribe(cryptos => {
      let target: Cryptocurrency | undefined;
      if (coinParam) {
        target = cryptos.find(c =>
          c.id === coinParam ||
          c.symbol.toLowerCase() === coinParam.toLowerCase()
        );
      }
      if (!target) {
        target = cryptos.find(c => c.id === 'bitcoin') || cryptos[0];
      }
      if (target) this.selectCoin(target);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Price History ─────────────────────────────────────────────────────────
  setupSearch(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      switchMap(q => {
        if (!q || q.trim().length < 2) {
          this.searchResults = [];
          return [];
        }
        return this.cryptoService.searchCryptocurrencies(q.trim());
      }),
      takeUntil(this.destroy$)
    ).subscribe(results => {
      this.searchResults = results.slice(0, 8);
    });
  }

  selectCoin(coin: Cryptocurrency): void {
    this.selectedCoin = coin;
    this.searchResults = [];
    this.searchControl.setValue('', { emitEvent: false });
    this.loadChart();
    this.loadMetrics();
  }

  selectPeriod(period: Period): void {
    this.selectedPeriod = period;
    this.loadChart();
  }

  loadChart(): void {
    if (!this.selectedCoin) return;
    this.loadingChart = true;
    this.priceHistoryService.getPriceHistory(this.selectedCoin.id, this.selectedPeriod)
      .pipe(takeUntil(this.destroy$))
      .subscribe(points => {
        this.pricePoints = points;
        this.loadingChart = false;
      });
  }

  loadMetrics(): void {
    if (!this.selectedCoin) return;
    this.loadingMetrics = true;
    this.priceHistoryService.getCoinMetrics(this.selectedCoin.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe(metrics => {
        this.coinMetrics = metrics;
        this.loadingMetrics = false;
      });
  }

  get chartPoints(): string {
    return this.priceHistoryService.buildSparklinePoints(
      this.pricePoints, this.chartWidth, this.chartHeight
    );
  }

  get chartIsPositive(): boolean {
    if (this.pricePoints.length < 2) return true;
    return this.pricePoints[this.pricePoints.length - 1].price >= this.pricePoints[0].price;
  }

  get chartMinPrice(): number {
    return this.pricePoints.length ? Math.min(...this.pricePoints.map(p => p.price)) : 0;
  }

  get chartMaxPrice(): number {
    return this.pricePoints.length ? Math.max(...this.pricePoints.map(p => p.price)) : 0;
  }

  get chartStartDate(): string {
    return this.pricePoints.length
      ? this.priceHistoryService.formatDate(this.pricePoints[0].timestamp)
      : '';
  }

  get chartEndDate(): string {
    return this.pricePoints.length
      ? this.priceHistoryService.formatDate(this.pricePoints[this.pricePoints.length - 1].timestamp)
      : '';
  }

  // ── Export ────────────────────────────────────────────────────────────────
  exportCSV(): void {
    if (!this.selectedCoin || !this.pricePoints.length) return;
    this.exporting = true;

    const coinName = this.selectedCoin.name;
    const symbol = this.selectedCoin.symbol.toUpperCase();
    const period = this.selectedPeriod;

    const header = 'Data,Hora,Moeda,Símbolo,Preço (USD)\n';
    const rows = this.pricePoints.map(p => {
      const d = new Date(p.timestamp);
      const date = d.toLocaleDateString('pt-PT');
      const time = d.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
      return `${date},${time},${coinName},${symbol},${p.price.toFixed(6)}`;
    }).join('\n');

    const csv = '\uFEFF' + header + rows; // BOM for Excel UTF-8
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `historico_${symbol}_${period}d_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);

    this.exporting = false;
    this.toast.success(`Histórico de ${coinName} exportado em CSV`);
  }

  exportExcel(): void {
    if (!this.selectedCoin || !this.pricePoints.length) return;
    this.exporting = true;

    const coinName = this.selectedCoin.name;
    const symbol = this.selectedCoin.symbol.toUpperCase();
    const period = this.selectedPeriod;

    // Build a simple HTML table that Excel can open
    const rows = this.pricePoints.map(p => {
      const d = new Date(p.timestamp);
      const date = d.toLocaleDateString('pt-PT');
      const time = d.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
      return `<tr><td>${date}</td><td>${time}</td><td>${coinName}</td><td>${symbol}</td><td>${p.price.toFixed(6)}</td></tr>`;
    }).join('');

    const html = `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel">
      <head><meta charset="UTF-8">
      <style>td,th{border:1px solid #ccc;padding:4px 8px;}th{background:#4f46e5;color:white;font-weight:bold;}</style>
      </head><body>
      <table>
        <thead><tr><th>Data</th><th>Hora</th><th>Moeda</th><th>Símbolo</th><th>Preço (USD)</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      </body></html>`;

    const blob = new Blob([html], { type: 'application/vnd.ms-excel;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `historico_${symbol}_${period}d_${new Date().toISOString().slice(0, 10)}.xls`;
    link.click();
    URL.revokeObjectURL(url);

    this.exporting = false;
    this.toast.success(`Histórico de ${coinName} exportado em Excel`);
  }

  // ── Formatters ────────────────────────────────────────────────────────────
  formatPrice(price: number): string {
    if (!price && price !== 0) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: price < 1 ? 6 : 2
    }).format(price);
  }

  formatMarketCap(value: number): string {
    if (!value) return 'N/A';
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9)  return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6)  return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toFixed(2)}`;
  }

  formatChange(val: number): string {
    if (val === null || val === undefined) return 'N/A';
    const sign = val >= 0 ? '+' : '';
    return `${sign}${val.toFixed(2)}%`;
  }

  changeClass(val: number): string {
    return val >= 0 ? 'positive' : 'negative';
  }
}
