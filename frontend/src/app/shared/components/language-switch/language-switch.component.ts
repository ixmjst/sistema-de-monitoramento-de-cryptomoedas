import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-language-switch',
    templateUrl: './language-switch.component.html',
    styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent {
    currentLanguage: string = 'pt';
    languages = [
        { code: 'pt', label: '🇵🇹 Português' },
        { code: 'en', label: '🇬🇧 English' },
    ];

    constructor(private translateService: TranslateService) {
        this.currentLanguage = localStorage.getItem('language') || 'pt';
    }

    changeLanguage(lang: string): void {
        this.currentLanguage = lang;
        this.translateService.use(lang);
        localStorage.setItem('language', lang);
    }
}
