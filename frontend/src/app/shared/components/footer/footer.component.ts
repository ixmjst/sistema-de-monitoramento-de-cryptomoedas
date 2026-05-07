import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    currentYear = new Date().getFullYear();

    footerLinks = [
        { label: 'Sobre', url: '#' },
        { label: 'Privacidade', url: '#' },
        { label: 'Termos', url: '#' },
        { label: 'Contato', url: '#' },
    ];
}
