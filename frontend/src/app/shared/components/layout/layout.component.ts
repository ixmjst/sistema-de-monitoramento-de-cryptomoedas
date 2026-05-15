import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
    showScrollTop = false;

    private mainEl: HTMLElement | null = null;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    onMainScroll(event: Event): void {
        const target = event.target as HTMLElement;
        this.mainEl = target;
        this.showScrollTop = target.scrollTop > 300;
    }

    scrollToTop(): void {
        this.mainEl?.scrollTo({ top: 0, behavior: 'smooth' });
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}
