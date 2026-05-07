import { Component, EventEmitter, Output, OnInit } from '@angular/core';
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

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        // Inicializar navbar
    }

    toggleMenu(): void {
        this.onMenuClick.emit();
    }

    onSearch(): void {
        // Implementar busca
        console.log('Searching for:', this.searchQuery);
    }
}
