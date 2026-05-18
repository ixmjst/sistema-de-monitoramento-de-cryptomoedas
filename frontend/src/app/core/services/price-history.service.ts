import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface PricePoint {
  timestamp: number;
  price: number;
}

export interface CoinMetrics {
  id: string;
  name: string;
  symbol: string;
  imageUrl: string;
  currentPrice: number;
  change24h: number;
  change7d: number;
  change30d: number;
  change1y: number;
  ath: number;
  athDate: string;
  atl: number;
  atlDate: string;
  marketCap: number;
  volume24h: number;
  high24h: number;
  low24h: number;
}

export type Period = '1' | '7' | '30' | '365';

@Injectable({ providedIn: 'root' })
export class PriceHistoryService {
  private base = 'https://api.coingecko.com/api/v3';
  private key = 'CG-VN764t2tMqBMwXKXdS9QjP3j';

  constructor(private http: HttpClient) {}

  /**
   * Retorna histórico de preços para um período
   * days: '1' | '7' | '30' | '365'
   */
  getPriceHistory(coinId: string, days: Period): Observable<PricePoint[]> {
    const params: any = {
      vs_currency: 'usd',
      days,
      x_cg_demo_api_key: this.key
    };
    // Para 1 dia usa intervalo de minutos, para o resto usa diário
    if (days !== '1') {
      params['interval'] = 'daily';
    }

    return this.http.get<any>(`${this.base}/coins/${coinId}/market_chart`, { params }).pipe(
      map(res => {
        const prices: [number, number][] = res?.prices || [];
        return prices.map(([ts, price]) => ({ timestamp: ts, price }));
      }),
      catchError(() => of([]))
    );
  }

  /**
   * Retorna métricas detalhadas de uma moeda
   */
  getCoinMetrics(coinId: string): Observable<CoinMetrics | null> {
    const params: any = {
      localization: 'false',
      tickers: 'false',
      market_data: 'true',
      community_data: 'false',
      developer_data: 'false',
      x_cg_demo_api_key: this.key
    };

    return this.http.get<any>(`${this.base}/coins/${coinId}`, { params }).pipe(
      map(c => {
        if (!c) return null;
        const md = c.market_data;
        return {
          id: c.id,
          name: c.name,
          symbol: c.symbol?.toUpperCase(),
          imageUrl: c.image?.small || c.image?.thumb || '',
          currentPrice: md?.current_price?.usd || 0,
          change24h: md?.price_change_percentage_24h || 0,
          change7d: md?.price_change_percentage_7d || 0,
          change30d: md?.price_change_percentage_30d || 0,
          change1y: md?.price_change_percentage_1y || 0,
          ath: md?.ath?.usd || 0,
          athDate: md?.ath_date?.usd || '',
          atl: md?.atl?.usd || 0,
          atlDate: md?.atl_date?.usd || '',
          marketCap: md?.market_cap?.usd || 0,
          volume24h: md?.total_volume?.usd || 0,
          high24h: md?.high_24h?.usd || 0,
          low24h: md?.low_24h?.usd || 0,
        } as CoinMetrics;
      }),
      catchError(() => of(null))
    );
  }

  /**
   * Gera pontos SVG para o gráfico de linha
   */
  buildSparklinePoints(points: PricePoint[], width: number, height: number): string {
    if (!points.length) return '';
    const prices = points.map(p => p.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const range = max - min || 1;
    const pad = 4;
    const w = width - pad * 2;
    const h = height - pad * 2;

    return points.map((p, i) => {
      const x = pad + (i / (points.length - 1)) * w;
      const y = pad + h - ((p.price - min) / range) * h;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  }

  formatDate(isoOrMs: string | number): string {
    const d = typeof isoOrMs === 'number' ? new Date(isoOrMs) : new Date(isoOrMs);
    return d.toLocaleDateString('pt-PT', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
