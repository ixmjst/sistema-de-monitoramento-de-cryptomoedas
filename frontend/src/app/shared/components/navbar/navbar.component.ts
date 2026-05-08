import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../../../core/services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    @Output() onMenuClick = new EventEmitter<void>();

    user$ = this.authService.user$;
    searchQuery = '';

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {}

    toggleMenu(): void {
        this.onMenuClick.emit();
    }

    onSearch(): void {
        if (this.searchQuery.trim()) {
            this.router.navigate(['/cryptocurrencies'], { queryParams: { q: this.searchQuery } });
        }
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}
