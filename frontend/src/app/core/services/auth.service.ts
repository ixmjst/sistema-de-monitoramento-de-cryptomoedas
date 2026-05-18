import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface User {
    id?: number;
    email: string;
    name: string;
    role?: 'admin' | 'user';
    language?: string;
    theme?: string;
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
            email: email.trim().toLowerCase(),
            password,
        }).pipe(
            map(response => response.data),
            tap(data => this.setSession(data))
        );
    }

    register(user: { name: string; email: string; password: string }): Observable<{ token: string; user: User }> {
        return this.http.post<ApiResponse<{ token: string; user: User }>>(`${this.apiUrl}/register`, {
            ...user,
            email: user.email.trim().toLowerCase()
        }).pipe(
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

    isAdmin(): boolean {
        return this.getCurrentUser()?.role === 'admin';
    }

    forgotPassword(email: string): Observable<{ message: string }> {
        return this.http.post<ApiResponse<{ message: string }>>(`${this.apiUrl}/forgot-password`, {
            email: email.trim().toLowerCase()
        }).pipe(map(response => response.data));
    }

    resetPassword(token: string, password: string): Observable<{ message: string }> {
        return this.http.post<ApiResponse<{ message: string }>>(`${this.apiUrl}/reset-password`, {
            token,
            password
        }).pipe(map(response => response.data));
    }

    updateProfile(data: Partial<User>): Observable<User> {
        return this.http.put<ApiResponse<User>>(`${this.apiUrl}/profile`, data).pipe(
            map(response => response.data),
            tap(user => {
                const current = this.getCurrentUser();
                const updated = { ...current, ...user };
                localStorage.setItem('user', JSON.stringify(updated));
                this.userSubject.next(updated);
            })
        );
    }
}
