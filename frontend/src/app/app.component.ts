import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'Sistema de Monitoramento de Criptomoedas';

    constructor(
        private themeService: ThemeService,
        private translateService: TranslateService
    ) { }

    ngOnInit(): void {
        this.initializeApp();
    }

    ngOnDestroy(): void {
        // Cleanup se necessário
    }

    private initializeApp(): void {
        // Inicializar tema
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.themeService.setTheme(savedTheme);

        // Inicializar idioma
        const savedLanguage = localStorage.getItem('language') || 'pt';
        this.translateService.setDefaultLanguage(savedLanguage);
        this.translateService.use(savedLanguage);
    }
}
