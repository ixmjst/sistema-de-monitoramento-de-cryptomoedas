import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

export interface Cryptocurrency {
    id: string;
    code?: string;
    name: string;
    symbol: string;
    currentPrice: number;
    current_price?: number;
    priceChange24h: number;
    price_change_24h?: number;
    imageUrl?: string;
    image_url?: string;
    marketCap?: number;
    market_cap?: number;
    marketCapRank?: number;
    market_cap_rank?: number;
    volume24h?: number;
}

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

interface PaginatedResponse {
    data: any[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
}

@Injectable({
    providedIn: 'root',
})
export class CryptoService {
    private apiUrl = 'http://localhost:8000/api/v1/cryptocurrencies';
    private coingeckoUrl = 'https://api.coingecko.com/api/v3';
    private coingeckoKey = 'CG-VN764t2tMqBMwXKXdS9QjP3j';
    private cryptosSubject = new BehaviorSubject<Cryptocurrency[]>([]);
    public cryptos$ = this.cryptosSubject.asObservable();

    private cache: Map<string, Cryptocurrency[]> = new Map();
    private cacheTimes: Map<string, number> = new Map();
    private cacheDuration = 5 * 60 * 1000;

    constructor(private http: HttpClient) { }

    getCryptocurrencies(page: number = 1, limit: number = 50): Observable<Cryptocurrency[]> {
        const cacheKey = `cryptos_${page}_${limit}`;
        const now = Date.now();
        const lastFetch = this.cacheTimes.get(cacheKey) || 0;

        if (this.cache.has(cacheKey) && now - lastFetch < this.cacheDuration) {
            return of(this.cache.get(cacheKey)!);
        }

        const params: any = {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: limit.toString(),
            page: page.toString(),
            sparkline: 'false',
            locale: 'en',
            x_cg_demo_api_key: this.coingeckoKey
        };

        return this.http
            .get<any[]>(`${this.coingeckoUrl}/coins/markets`, { params })
            .pipe(
                map(response => this.normalizeList(Array.isArray(response) ? response : [])),
                tap(cryptos => {
                    this.cache.set(cacheKey, cryptos);
                    this.cacheTimes.set(cacheKey, now);
                    this.cryptosSubject.next(cryptos);
                }),
                catchError(err => {
                    console.error('Error fetching cryptocurrencies from CoinGecko:', err);
                    return of([]);
                })
            );
    }

    searchCryptocurrencies(query: string): Observable<Cryptocurrency[]> {
        if (!query.trim()) {
            return of([]);
        }

        const params: any = {
            query: query.trim(),
            x_cg_demo_api_key: this.coingeckoKey
        };

        return this.http
            .get<any>(`${this.coingeckoUrl}/search`, { params })
            .pipe(
                map(response => {
                    if (!response?.coins) {
                        return [];
                    }
                    return this.normalizeList(
                        response.coins.map((coin: any) => ({
                            id: coin.id,
                            symbol: coin.symbol,
                            name: coin.name,
                            image_url: coin.thumb,
                            current_price: 0,
                            market_cap: 0,
                            market_cap_rank: coin.market_cap_rank ?? 0,
                            price_change_24h: 0,
                            price_change_percentage_24h: 0,
                            total_volume: 0
                        }))
                    );
                }),
                catchError(() => of([]))
            );
    }

    getCryptoDetails(id: string): Observable<Cryptocurrency | null> {
        const params: any = {
            localization: 'false',
            sparkline: 'false',
            x_cg_demo_api_key: this.coingeckoKey
        };

        return this.http
            .get<any>(`${this.coingeckoUrl}/coins/${id}`, { params })
            .pipe(
                map(response => response ? this.normalize(response) : null),
                catchError(() => of(null))
            );
    }

    clearCache(): void {
        this.cache.clear();
        this.cacheTimes.clear();
    }

    // Normaliza campos snake_case do banco para camelCase
    private normalize(c: any): Cryptocurrency {
        return {
            id: String(c.id ?? c.code ?? ''),
            code: c.code,
            name: c.name ?? 'Unknown',
            symbol: c.symbol ?? '',
            currentPrice: parseFloat(c.current_price ?? c.currentPrice ?? 0),
            priceChange24h: parseFloat(c.price_change_24h ?? c.priceChange24h ?? 0),
            imageUrl: c.image_url ?? c.imageUrl ?? c.image ?? '',
            marketCap: parseFloat(c.market_cap ?? c.marketCap ?? 0),
            marketCapRank: parseInt(c.market_cap_rank ?? c.marketCapRank ?? 0),
            volume24h: parseFloat(c.total_volume ?? c.volume_24h ?? c.volume24h ?? 0),
        };
    }

    private normalizeList(items: any[]): Cryptocurrency[] {
        return items.map(c => this.normalize(c));
    }
}
