import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationCancel, NavigationEnd, NavigationError, NavigationStart } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'Sistema de Monitoramento de Criptomoedas';
    routeLoading = false;

    constructor(
        private themeService: ThemeService,
        private translateService: TranslateService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.initializeApp();
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.routeLoading = true;
            }

            if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                setTimeout(() => {
                    this.routeLoading = false;
                }, 180);
            }
        });
    }

    ngOnDestroy(): void {
        // Cleanup se necessário
    }

    private initializeApp(): void {
        // Inicializar tema
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.themeService.setTheme(savedTheme as 'light' | 'dark');

        // Inicializar idioma
        const savedLanguage = localStorage.getItem('language') || 'pt';
        this.translateService.setDefaultLang(savedLanguage);
        this.translateService.use(savedLanguage);
    }
}
