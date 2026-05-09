import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface User {
    id?: number;
    email: string;
    name: string;
    token?: string;
}

interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://localhost:8000/api/v1/auth';
    private userSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());
    public user$ = this.userSubject.asObservable();

    constructor(private http: HttpClient) { }

    private getUserFromStorage(): User | null {
        try {
            const user = localStorage.getItem('user');
            return user ? JSON.parse(user) : null;
        } catch {
            return null;
        }
    }

    login(email: string, password: string): Observable<{ token: string; user: User }> {
        return this.http.post<ApiResponse<{ token: string; user: User }>>(`${this.apiUrl}/login`, {
            email,
            password,
        }).pipe(
            map(response => response.data),
            tap(data => this.setSession(data))
        );
    }

    register(user: { name: string; email: string; password: string }): Observable<{ token: string; user: User }> {
        return this.http.post<ApiResponse<{ token: string; user: User }>>(`${this.apiUrl}/register`, user).pipe(
            map(response => response.data),
            tap(data => this.setSession(data))
        );
    }

    private setSession(response: { token: string; user: User }): void {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.userSubject.next(response.user);
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.userSubject.next(null);
    }

    getCurrentUser(): User | null {
        return this.userSubject.value;
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }
}
