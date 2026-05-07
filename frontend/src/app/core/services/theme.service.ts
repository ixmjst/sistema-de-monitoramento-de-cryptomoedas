import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private currentThemeSubject = new BehaviorSubject<'light' | 'dark'>('dark');
    public currentTheme$ = this.currentThemeSubject.asObservable();

    constructor() {
        this.initializeTheme();
    }

    private initializeTheme(): void {
        const savedTheme = (localStorage.getItem('theme') || 'dark') as 'light' | 'dark';
        this.setTheme(savedTheme);
    }

    setTheme(theme: 'light' | 'dark'): void {
        this.currentThemeSubject.next(theme);
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    getCurrentTheme(): 'light' | 'dark' {
        return this.currentThemeSubject.value;
    }

    toggleTheme(): void {
        const currentTheme = this.getCurrentTheme();
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}
