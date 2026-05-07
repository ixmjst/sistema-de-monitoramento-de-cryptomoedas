import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Favorite {
    id?: number;
    userId?: number;
    cryptoId: string;
    addedAt?: Date;
}

@Injectable({
    providedIn: 'root',
})
export class FavoriteService {
    private apiUrl = 'http://localhost:8000/api/favorites';

    constructor(private http: HttpClient) { }

    getFavorites(): Observable<Favorite[]> {
        return this.http.get<Favorite[]>(this.apiUrl);
    }

    addFavorite(cryptoId: string): Observable<Favorite> {
        return this.http.post<Favorite>(this.apiUrl, { cryptoId });
    }

    removeFavorite(cryptoId: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${cryptoId}`);
    }

    isFavorite(cryptoId: string): Observable<boolean> {
        return new Observable((observer) => {
            this.getFavorites().subscribe(
                (favorites) => {
                    const isFav = favorites.some((fav) => fav.cryptoId === cryptoId);
                    observer.next(isFav);
                    observer.complete();
                },
                (error) => observer.error(error)
            );
        });
    }
}
