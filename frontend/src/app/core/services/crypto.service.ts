import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Cryptocurrency {
    id: string;
    name: string;
    symbol: string;
    currentPrice: number;
    priceChange24h: number;
    imageUrl?: string;
    marketCap?: number;
}

@Injectable({
    providedIn: 'root',
})
export class CryptoService {
    private apiUrl = 'http://localhost:8000/api/cryptocurrencies';
    private cryptosSubject = new BehaviorSubject<Cryptocurrency[]>([]);
    public cryptos$ = this.cryptosSubject.asObservable();

    // Cache local
    private cryptosCache: Map<string, Cryptocurrency[]> = new Map();
    private cacheDuration = 5 * 60 * 1000; // 5 minutos
    private lastFetchTime: Map<string, number> = new Map();

    constructor(private http: HttpClient) { }

    getCryptocurrencies(page: number = 1, limit: number = 10): Observable<Cryptocurrency[]> {
        const cacheKey = `cryptos_${page}_${limit}`;
        const now = Date.now();
        const lastFetch = this.lastFetchTime.get(cacheKey) || 0;

        // Verificar se deve usar cache
        if (this.cryptosCache.has(cacheKey) && now - lastFetch < this.cacheDuration) {
            return new Observable((observer) => {
                observer.next(this.cryptosCache.get(cacheKey)!);
                observer.complete();
            });
        }

        return new Observable((observer) => {
            this.http
                .get<Cryptocurrency[]>(`${this.apiUrl}?page=${page}&limit=${limit}`)
                .subscribe(
                    (data) => {
                        this.cryptosCache.set(cacheKey, data);
                        this.lastFetchTime.set(cacheKey, now);
                        this.cryptosSubject.next(data);
                        observer.next(data);
                        observer.complete();
                    },
                    (error) => observer.error(error)
                );
        });
    }

    searchCryptocurrencies(query: string): Observable<Cryptocurrency[]> {
        return this.http.get<Cryptocurrency[]>(`${this.apiUrl}/search?q=${query}`);
    }

    getCryptoDetails(id: string): Observable<Cryptocurrency> {
        return this.http.get<Cryptocurrency>(`${this.apiUrl}/${id}`);
    }

    getCryptoPrice(id: string): Observable<{ price: number; change24h: number }> {
        return this.http.get<{ price: number; change24h: number }>(`${this.apiUrl}/${id}/price`);
    }

    clearCache(): void {
        this.cryptosCache.clear();
        this.lastFetchTime.clear();
    }
}
