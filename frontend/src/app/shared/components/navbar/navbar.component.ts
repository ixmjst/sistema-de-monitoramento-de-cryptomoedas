import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';
import { FavoriteService } from '../../../core/services/favorite.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
    user$ = this.authService.user$;
    searchQuery = '';
    favoriteCount = 0;
    isAdmin = false;
    mobileMenuOpen = false;

    private destroy$ = new Subject<void>();

    constructor(
        private authService: AuthService,
        private favoriteService: FavoriteService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.favoriteService.favorites$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(favs => {
            this.favoriteCount = favs.length;
        });

        this.authService.user$.pipe(
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.isAdmin = this.authService.isAdmin();
        });

        // Fecha menu mobile ao navegar
        this.router.events.pipe(
            filter(e => e instanceof NavigationEnd),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.mobileMenuOpen = false;
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    toggleMobileMenu(): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    closeMobileMenu(): void {
        this.mobileMenuOpen = false;
    }

    onSearch(): void {
        if (this.searchQuery.trim()) {
            this.router.navigate(['/cryptocurrencies'], { queryParams: { q: this.searchQuery } });
            this.mobileMenuOpen = false;
        }
    }

    logout(): void {
        this.favoriteService.clearCache();
        this.authService.logout();
        this.mobileMenuOpen = false;
        this.router.navigate(['/']);
    }
}
