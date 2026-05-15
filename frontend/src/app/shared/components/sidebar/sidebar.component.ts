import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    @Input() open = false;
    @Output() onClose = new EventEmitter<void>();

    menuItems = [
        { labelKey: 'nav.dashboard', icon: 'dashboard', route: '/dashboard' },
        { labelKey: 'nav.cryptocurrencies', icon: 'crypto', route: '/cryptocurrencies' },
        { labelKey: 'nav.favorites', icon: 'favorites', route: '/favorites' },
        { labelKey: 'nav.portfolio', icon: 'portfolio', route: '/portfolio' },
        { labelKey: 'nav.history', icon: 'history', route: '/history' },
        { labelKey: 'nav.export', icon: 'export', route: '/export' },
    ];

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    get visibleMenuItems() {
        const items = [...this.menuItems];

        if (this.authService.isAdmin()) {
            items.push({ labelKey: 'nav.admin', icon: 'admin', route: '/admin' });
        }

        return items;
    }

    navigate(route: string): void {
        this.router.navigate([route]);
        this.onClose.emit();
    }

    closeSidebar(): void {
        this.onClose.emit();
    }

    logout(): void {
        this.authService.logout();
        this.onClose.emit();
        this.router.navigate(['/auth/login']);
    }
}
