import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
    selector: 'app-theme-switch',
    templateUrl: './theme-switch.component.html',
    styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent {
    currentTheme$ = this.themeService.currentTheme$;

    constructor(private themeService: ThemeService) { }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }
}
