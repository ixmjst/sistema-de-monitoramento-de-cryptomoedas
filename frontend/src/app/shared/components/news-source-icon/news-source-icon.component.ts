import { Component, Input } from '@angular/core';

/**
 * Renderiza um ícone SVG profissional para cada fonte de notícias crypto.
 * Fontes suportadas: coindesk, cointelegraph, bitcoin-com, bloomberg,
 * coingecko, cryptopanic, decrypt, theblock, messari, coinbase, binance, generic
 */
@Component({
  selector: 'app-news-source-icon',
  template: `
    <span class="source-icon-wrap" [title]="sourceName" [attr.aria-label]="sourceName">
      <ng-container [ngSwitch]="slug">

        <!-- CoinDesk -->
        <svg *ngSwitchCase="'coindesk'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#1A1A2E"/>
          <path d="M8 16c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8-8-3.582-8-8z" stroke="#00D4FF" stroke-width="2"/>
          <path d="M13 16h6M16 13v6" stroke="#00D4FF" stroke-width="2" stroke-linecap="round"/>
        </svg>

        <!-- CoinTelegraph -->
        <svg *ngSwitchCase="'cointelegraph'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#FF6B35"/>
          <path d="M10 10h12v3H10zM10 19h12v3H10zM10 14.5h12v3H10z" fill="white"/>
        </svg>

        <!-- Bitcoin.com -->
        <svg *ngSwitchCase="'bitcoin-com'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#F7931A"/>
          <path d="M20.5 14.5c.3-2-1.2-3-3.3-3.7l.7-2.7-1.6-.4-.7 2.6c-.4-.1-.8-.2-1.3-.3l.7-2.6-1.6-.4-.7 2.7c-.3-.1-.7-.2-1-.3l-2.1-.5-.4 1.7s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.3c0 .1.1.1.1.2l-.1-.1-1.1 4.5c-.1.2-.3.5-.8.4 0 0-1.2-.3-1.2-.3l-.8 1.8 2 .5c.4.1.7.2 1.1.3l-.7 2.7 1.6.4.7-2.7c.4.1.9.2 1.3.3l-.7 2.7 1.6.4.7-2.7c2.8.5 4.9.3 5.8-2.2.7-2-.1-3.2-1.5-3.9 1.1-.3 1.9-1 2.1-2.5zm-3.8 5.3c-.5 2-3.9.9-5 .6l.9-3.5c1.1.3 4.6.8 4.1 2.9zm.5-5.3c-.5 1.8-3.3.9-4.2.7l.8-3.2c.9.2 3.9.6 3.4 2.5z" fill="white"/>
        </svg>

        <!-- Bloomberg -->
        <svg *ngSwitchCase="'bloomberg'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#1A1A1A"/>
          <path d="M8 10h4.5c2 0 3.5 1 3.5 2.8 0 1-.5 1.8-1.3 2.2 1.1.4 1.8 1.3 1.8 2.5C16.5 20 15 21 12.5 21H8V10zm2 4.2h2.3c.9 0 1.5-.5 1.5-1.3s-.6-1.3-1.5-1.3H10v2.6zm0 5.2h2.5c1 0 1.7-.5 1.7-1.4s-.7-1.4-1.7-1.4H10v2.8zM18 10h2v11h-2z" fill="white"/>
          <path d="M22 10h2v11h-2z" fill="#FF6B35"/>
        </svg>

        <!-- CoinGecko -->
        <svg *ngSwitchCase="'coingecko'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#8DC63F"/>
          <circle cx="16" cy="16" r="8" fill="white"/>
          <circle cx="13" cy="14" r="1.5" fill="#8DC63F"/>
          <circle cx="19" cy="14" r="1.5" fill="#8DC63F"/>
          <path d="M12 19c1 1.5 7 1.5 8 0" stroke="#8DC63F" stroke-width="1.5" stroke-linecap="round"/>
        </svg>

        <!-- CryptoPanic -->
        <svg *ngSwitchCase="'cryptopanic'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#E74C3C"/>
          <path d="M16 8l2 5h5l-4 3 1.5 5L16 18l-4.5 3 1.5-5-4-3h5z" fill="white"/>
        </svg>

        <!-- Decrypt -->
        <svg *ngSwitchCase="'decrypt'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#0D0D0D"/>
          <path d="M10 10h5c3.9 0 7 2.7 7 6s-3.1 6-7 6h-5V10zm2 2v8h3c2.8 0 5-1.8 5-4s-2.2-4-5-4h-3z" fill="white"/>
        </svg>

        <!-- The Block -->
        <svg *ngSwitchCase="'theblock'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#0052FF"/>
          <rect x="9" y="9" width="6" height="6" rx="1" fill="white"/>
          <rect x="17" y="9" width="6" height="6" rx="1" fill="white" opacity="0.6"/>
          <rect x="9" y="17" width="6" height="6" rx="1" fill="white" opacity="0.6"/>
          <rect x="17" y="17" width="6" height="6" rx="1" fill="white"/>
        </svg>

        <!-- Messari -->
        <svg *ngSwitchCase="'messari'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#1B1B2F"/>
          <path d="M8 22V10l4 7 4-7 4 7 4-7v12" stroke="#7B61FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <!-- Binance -->
        <svg *ngSwitchCase="'binance'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#F3BA2F"/>
          <path d="M16 8l2.5 2.5-2.5 2.5-2.5-2.5L16 8zM10.5 13.5l2.5 2.5-2.5 2.5-2.5-2.5 2.5-2.5zM21.5 13.5l2.5 2.5-2.5 2.5-2.5-2.5 2.5-2.5zM16 19l2.5 2.5-2.5 2.5-2.5-2.5L16 19zM16 14.5l1.5 1.5-1.5 1.5-1.5-1.5 1.5-1.5z" fill="white"/>
        </svg>

        <!-- Coinbase -->
        <svg *ngSwitchCase="'coinbase'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#0052FF"/>
          <circle cx="16" cy="16" r="7" fill="white"/>
          <rect x="12.5" y="13.5" width="7" height="5" rx="1" fill="#0052FF"/>
        </svg>

        <!-- Genérico (fallback) -->
        <svg *ngSwitchDefault viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="6" fill="#4F46E5"/>
          <path d="M9 10h14v2H9zM9 15h14v2H9zM9 20h9v2H9z" fill="white"/>
        </svg>

      </ng-container>
    </span>
  `,
  styles: [`
    .source-icon-wrap {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    svg {
      width: 22px;
      height: 22px;
      display: block;
    }
  `]
})
export class NewsSourceIconComponent {
  @Input() sourceSlug = 'generic';
  @Input() sourceName = '';

  get slug(): string {
    return this.sourceSlug || 'generic';
  }
}
