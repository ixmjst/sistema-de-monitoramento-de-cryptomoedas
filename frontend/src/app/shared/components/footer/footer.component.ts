import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    currentYear = new Date().getFullYear();

    footerLinks = [
        { labelKey: 'footer.about', url: '#' },
        { labelKey: 'footer.privacy', url: '#' },
        { labelKey: 'footer.terms', url: '#' },
        { labelKey: 'footer.contact', url: '#' },
    ];
}
