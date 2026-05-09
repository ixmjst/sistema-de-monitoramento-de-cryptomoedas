import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    @Input() open = false;
    @Output() onClose = new EventEmitter<void>();

    menuItems = [
        { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
        { label: 'Criptomoedas', icon: 'crypto', route: '/cryptocurrencies' },
        { label: 'Favoritos', icon: 'favorites', route: '/favorites' },
        { label: 'Histórico', icon: 'history', route: '/history' },
        { label: 'Exportar', icon: 'export', route: '/export' },
    ];

    constructor(private router: Router) { }

    navigate(route: string): void {
        this.router.navigate([route]);
        this.onClose.emit();
    }

    closeSidebar(): void {
        this.onClose.emit();
    }
}
