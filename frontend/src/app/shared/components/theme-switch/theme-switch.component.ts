import { Component, Input } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
    selector: 'app-theme-switch',
    templateUrl: './theme-switch.component.html',
    styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent {
    @Input() compact = false;

    currentTheme$ = this.themeService.currentTheme$;

    constructor(private themeService: ThemeService) { }

    setTheme(theme: 'light' | 'dark'): void {
        this.themeService.setTheme(theme);
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }
}
