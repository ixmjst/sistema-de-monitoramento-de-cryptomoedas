import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, catchError, finalize } from 'rxjs/operators';

export interface Favorite {
    id?: number;
    user_id?: number;
    crypto_code: string;
    name?: string;
    symbol?: string;
    current_price?: number;
    price_change_24h?: number;
    image_url?: string;
    market_cap?: number;
    created_at?: string;
}

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

const STORAGE_KEY = 'crypto_favorites';

@Injectable({
    providedIn: 'root',
})
export class FavoriteService {
    private apiUrl = 'http://localhost:8000/api/v1/favorites';
    
    // BehaviorSubject para estado reativo (imutável)
    private favoritesSubject = new BehaviorSubject<Favorite[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    
    // Observables públicos
    favorites$ = this.favoritesSubject.asObservable();
    loading$ = this.loadingSubject.asObservable();
    
    private initialized = false;

    constructor(private http: HttpClient) {
        this.loadFromStorage();
        this.initializeFavorites();
    }

    /**
     * Inicializa favoritos: primeiro tenta localStorage, depois API
     */
    private initializeFavorites(): void {
        if (this.initialized) return;
        this.initialized = true;

        // Carrega da API se houver token (chave correta: 'token')
        const token = localStorage.getItem('token');
        if (token) {
            this.syncFromApi().subscribe();
        }
    }

    /**
     * Carrega favoritos do localStorage (fallback)
     */
    private loadFromStorage(): void {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed)) {
                    this.favoritesSubject.next(parsed);
                }
            }
        } catch (error) {
            console.error('Erro ao carregar favoritos do localStorage:', error);
        }
    }

    /**
     * Salva favoritos no localStorage
     */
    private saveToStorage(favorites: Favorite[]): void {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
        } catch (error) {
            console.error('Erro ao salvar favoritos no localStorage:', error);
        }
    }

    /**
     * Sincroniza favoritos da API
     */
    syncFromApi(): Observable<Favorite[]> {
        this.loadingSubject.next(true);
        return this.http.get<ApiResponse<Favorite[]>>(this.apiUrl).pipe(
            map(res => res.data || []),
            tap(favs => {
                // Atualiza estado imutável (novo array sempre)
                this.favoritesSubject.next([...favs]);
                this.saveToStorage(favs);
            }),
            catchError(error => {
                console.error('Erro ao sincronizar favoritos:', error);
                // Mantém favoritos locais em caso de erro
                return this.favorites$;
            }),
            finalize(() => this.loadingSubject.next(false))
        );
    }

    /**
     * Retorna favoritos como Observable (reativo)
     */
    getFavorites(): Observable<Favorite[]> {
        if (!this.initialized) {
            this.initializeFavorites();
        }
        
        // Se vazio, tenta carregar da API
        const current = this.favoritesSubject.value;
        if (current.length === 0) {
            this.syncFromApi().subscribe();
        }
        
        return this.favorites$;
    }

    /**
     * Adiciona favorito
     */
    addFavorite(cryptoCode: string, name?: string, symbol?: string, imageUrl?: string): Observable<any> {
        return this.http.post<ApiResponse<any>>(this.apiUrl, {
            crypto_code: cryptoCode,
            name: name,
            symbol: symbol,
            image_url: imageUrl
        }).pipe(
            tap(() => {
                const current = this.favoritesSubject.value;
                if (!current.some(f => f.crypto_code === cryptoCode)) {
                    const updated = [...current, {
                        crypto_code: cryptoCode,
                        name,
                        symbol,
                        image_url: imageUrl
                    } as Favorite];
                    this.favoritesSubject.next(updated);
                    this.saveToStorage(updated);
                }
            }),
            catchError(error => {
                console.error('Erro ao adicionar favorito:', error);
                throw error;
            })
        );
    }

    /**
     * Remove favorito
     */
    removeFavorite(cryptoCode: string): Observable<any> {
        return this.http.delete<ApiResponse<any>>(`${this.apiUrl}/${cryptoCode}`).pipe(
            tap(() => {
                const current = this.favoritesSubject.value;
                // Cria novo array sem o item removido
                const updated = current.filter(f => f.crypto_code !== cryptoCode);
                this.favoritesSubject.next(updated);
                this.saveToStorage(updated);
            }),
            catchError(error => {
                console.error('Erro ao remover favorito:', error);
                throw error;
            })
        );
    }

    /**
     * Verifica se é favorito (retorna Observable)
     */
    isFavorite(cryptoCode: string): Observable<boolean> {
        return this.favorites$.pipe(
            map(favorites => favorites.some(fav => fav.crypto_code === cryptoCode))
        );
    }

    /**
     * Obtém favoritos sincronamente (não recomendado)
     */
    getLocalFavorites(): Favorite[] {
        return [...this.favoritesSubject.value];
    }

    /**
     * Limpa cache (logout)
     */
    clearCache(): void {
        this.favoritesSubject.next([]);
        this.loadingSubject.next(false);
        this.initialized = false;
        try { 
            localStorage.removeItem(STORAGE_KEY); 
        } catch {}
    }
}
