import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceSlug: string;   // usado para escolher o ícone SVG
  imageUrl: string;
  url: string;
  publishedAt: string;
  category: 'news' | 'article';
  tag?: string;
  author?: string;
  rating?: number;
  votes?: number;
}

export interface MarketTicker {
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: number;
  marketCapChange24h: number;
  totalVolume24h: number;
  btcDominance: number;
  ethDominance: number;
  gasGwei: number;
}

/**
 * API usada: CryptoPanic Public Feed (sem chave para notícias públicas)
 * Endpoint: https://cryptopanic.com/api/free/v1/posts/?auth_token=free&public=true
 *
 * Para notícias em tempo real com mais controlo, registe-se gratuitamente em
 * https://cryptopanic.com/developers/api/ e substitua 'free' pelo seu token.
 *
 * Alternativas gratuitas:
 *  - CoinGecko /news  (sem chave, limitado)
 *  - NewsData.io      (plano gratuito com chave)
 *  - Messari API      (plano gratuito com chave)
 */
@Injectable({ providedIn: 'root' })
export class NewsService {

  // Token público do CryptoPanic (funciona sem registo, rate-limited)
  private cryptoPanicUrl = 'https://cryptopanic.com/api/free/v1/posts/?auth_token=free&public=true&kind=news';

  // Imagens de fallback por categoria temática
  private fallbackImages = [
    'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=220&fit=crop',
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=220&fit=crop',
    'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=220&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=220&fit=crop',
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=220&fit=crop',
    'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=220&fit=crop',
  ];

  constructor(
    private http: HttpClient,
    private translate: TranslateService
  ) {}

  private newsCache = new Map<string, Observable<NewsArticle[]>>();
  private articlesCache = new Map<string, Observable<NewsArticle[]>>();

  /**
   * Busca notícias em tempo real via CryptoPanic.
   * Cache compartilhado via shareReplay — notícias não desaparecem ao mudar de secção.
   */
  getLatestNews(): Observable<NewsArticle[]> {
    const lang = this.currentLanguage();
    if (!this.newsCache.has(lang)) {
      this.newsCache.set(lang, this.http.get<any>(this.newsUrlForLanguage(lang)).pipe(
        map(response => {
          const posts = response?.results || [];
          return posts.slice(0, 8).map((post: any, i: number) => this.mapCryptoPanicPost(post, i));
        }),
        catchError(() => of(this.getFallbackNews(lang))),
        shareReplay(1)
      ));
    }
    return this.newsCache.get(lang)!;
  }

  /** Artigos em destaque — usa fallback estático com cache */
  getFeaturedArticles(): Observable<NewsArticle[]> {
    const lang = this.currentLanguage();
    if (!this.articlesCache.has(lang)) {
      this.articlesCache.set(lang, of(this.getFallbackArticles(lang)).pipe(shareReplay(1)));
    }
    return this.articlesCache.get(lang)!;
  }

  /** Invalida cache de notícias para forçar refresh */
  refreshNews(): void {
    this.newsCache.clear();
    this.articlesCache.clear();
  }

  /** Calcula o ticker de mercado a partir dos dados reais da CoinGecko */
  getMarketTicker(cryptos: any[]): MarketTicker {
    const totalMarketCap = cryptos.reduce((s, c) => s + (c.marketCap || 0), 0);
    const totalVolume = cryptos.reduce((s, c) => s + (c.volume24h || 0), 0);
    const btcCap = cryptos.find(c => c.id === 'bitcoin')?.marketCap || 0;
    const ethCap = cryptos.find(c => c.id === 'ethereum')?.marketCap || 0;
    const btcDom = totalMarketCap > 0 ? (btcCap / totalMarketCap) * 100 : 58.2;
    const ethDom = totalMarketCap > 0 ? (ethCap / totalMarketCap) * 100 : 9.94;

    return {
      totalCoins: 17404,
      totalExchanges: 1470,
      totalMarketCap,
      marketCapChange24h: -2.2,
      totalVolume24h: totalVolume,
      btcDominance: btcDom,
      ethDominance: ethDom,
      gasGwei: 0.116
    };
  }

  /** Formata tempo relativo usando as chaves de tradução */
  formatTimeAgo(isoDate: string): string {
    const diff = Date.now() - new Date(isoDate).getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return this.translate.instant('news.timeAgoLess');
    if (hours < 24) return this.translate.instant('news.timeAgoHours', { hours });
    const days = Math.floor(hours / 24);
    return this.translate.instant('news.timeAgoDay', { days });
  }

  // ── Mapeamento CryptoPanic → NewsArticle ──────────────────────────────────

  private mapCryptoPanicPost(post: any, index: number): NewsArticle {
    const sourceName: string = post.source?.title || post.domain || 'CryptoPanic';
    return {
      id: String(post.id || index),
      title: post.title || '',
      summary: post.title || '',
      source: sourceName,
      sourceSlug: this.slugifySource(sourceName),
      imageUrl: this.fallbackImages[index % this.fallbackImages.length],
      url: post.url || post.source?.url || '#',
      publishedAt: post.published_at || new Date().toISOString(),
      category: 'news'
    };
  }

  private slugifySource(name: string): string {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  }

  private currentLanguage(): 'pt' | 'en' {
    const lang = this.translate.currentLang || this.translate.getDefaultLang() || localStorage.getItem('language') || 'pt';
    return lang.startsWith('pt') ? 'pt' : 'en';
  }

  private newsUrlForLanguage(lang: 'pt' | 'en'): string {
    return lang === 'pt' ? `${this.cryptoPanicUrl}&regions=pt` : `${this.cryptoPanicUrl}&regions=en`;
  }

  // ── Dados de fallback (usados quando a API não responde) ──────────────────

  private getFallbackNews(lang: 'pt' | 'en'): NewsArticle[] {
    if (lang === 'pt') {
      return [
        {
          id: 'pt-f1',
          title: 'Bitcoin e Ethereum recuam enquanto investidores aguardam novos dados macro',
          summary: 'O mercado cripto opera em cautela, com investidores acompanhando liquidez global, juros e fluxos institucionais.',
          source: 'CryptoMonitor',
          sourceSlug: 'cryptomonitor',
          imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=220&fit=crop',
          url: 'https://www.coingecko.com/pt/noticias',
          publishedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
          category: 'news'
        },
        {
          id: 'pt-f2',
          title: 'Volume das altcoins aumenta com rotacao para ativos de maior risco',
          summary: 'Tokens de media capitalizacao ganharam forca nas ultimas horas, impulsionados por maior procura em exchanges globais.',
          source: 'CoinGecko',
          sourceSlug: 'coingecko',
          imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=220&fit=crop',
          url: 'https://www.coingecko.com/pt',
          publishedAt: new Date(Date.now() - 4 * 3600000).toISOString(),
          category: 'news'
        },
        {
          id: 'pt-f3',
          title: 'Dominancia do Bitcoin segue como indicador-chave para o apetite ao risco',
          summary: 'Analistas acompanham a dominancia do BTC para medir se o mercado esta em fase defensiva ou de expansao para altcoins.',
          source: 'CoinDesk',
          sourceSlug: 'coindesk',
          imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=220&fit=crop',
          url: 'https://www.coindesk.com',
          publishedAt: new Date(Date.now() - 6 * 3600000).toISOString(),
          category: 'news'
        },
        {
          id: 'pt-f4',
          title: 'Investidores institucionais reforcam procura por infraestrutura blockchain',
          summary: 'Relatorios recentes apontam crescimento no interesse por custodia, tokenizacao e solucoes de dados on-chain.',
          source: 'Bloomberg',
          sourceSlug: 'bloomberg',
          imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=220&fit=crop',
          url: 'https://bloomberg.com/crypto',
          publishedAt: new Date(Date.now() - 8 * 3600000).toISOString(),
          category: 'news'
        }
      ];
    }
    return [
      {
        id: 'f1',
        title: 'Ripple Supports CLARITY Act — Garlinghouse Says "This Is the Moment"',
        summary: 'Ripple CEO Brad Garlinghouse publicly backed the CLARITY Act, calling it a pivotal moment for crypto regulation in the United States.',
        source: 'Bitcoin.com',
        sourceSlug: 'bitcoin-com',
        imageUrl: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=220&fit=crop',
        url: 'https://news.bitcoin.com',
        publishedAt: new Date(Date.now() - 2 * 3600000).toISOString(),
        category: 'news'
      },
      {
        id: 'f2',
        title: "Bitcoin's Market Top Was Hidden Behind Sophisticated Whale Distribution",
        summary: 'On-chain analysts reveal how large holders quietly distributed BTC near the previous cycle peak, masking the true market top.',
        source: 'CoinDesk',
        sourceSlug: 'coindesk',
        imageUrl: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=220&fit=crop',
        url: 'https://coindesk.com',
        publishedAt: new Date(Date.now() - 4 * 3600000).toISOString(),
        category: 'news'
      },
      {
        id: 'f3',
        title: 'Bitcoin, Ethereum, XRP Fall, But Dogecoin Gains Ahead Of Senate Markup',
        summary: 'Major cryptocurrencies dipped ahead of the Senate markup session, while DOGE bucked the trend with notable gains.',
        source: 'CoinTelegraph',
        sourceSlug: 'cointelegraph',
        imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=220&fit=crop',
        url: 'https://cointelegraph.com',
        publishedAt: new Date(Date.now() - 6 * 3600000).toISOString(),
        category: 'news'
      },
      {
        id: 'f4',
        title: 'Charles Schwab Begins Retail Bitcoin and Ethereum Trading Rollout',
        summary: 'Charles Schwab officially launched spot BTC and ETH trading for retail clients, marking a major step in mainstream crypto adoption.',
        source: 'Bloomberg',
        sourceSlug: 'bloomberg',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=220&fit=crop',
        url: 'https://bloomberg.com/crypto',
        publishedAt: new Date(Date.now() - 8 * 3600000).toISOString(),
        category: 'news'
      }
    ];
  }

  private getFallbackArticles(lang: 'pt' | 'en'): NewsArticle[] {
    if (lang === 'pt') {
      return [
        {
          id: 'pt-a1',
          title: 'Como analisar dados de mercado cripto antes de investir',
          summary: 'Um guia pratico para ler preco, volume, capitalizacao, dominancia e variacao de 24 horas com mais contexto.',
          source: 'CoinGecko',
          sourceSlug: 'coingecko',
          imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=220&fit=crop',
          url: 'https://www.coingecko.com/pt/aprenda',
          publishedAt: new Date(Date.now() - 24 * 3600000).toISOString(),
          category: 'article',
          tag: 'Guia',
          author: 'CryptoMonitor',
          rating: 4.4,
          votes: 18
        },
        {
          id: 'pt-a2',
          title: 'O que e tokenizacao de ativos reais e por que importa',
          summary: 'Entenda como titulos, fundos e ativos fisicos podem ser representados em blockchain e negociados com mais eficiencia.',
          source: 'CoinGecko',
          sourceSlug: 'coingecko',
          imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=220&fit=crop',
          url: 'https://www.coingecko.com/pt/aprenda',
          publishedAt: new Date(Date.now() - 36 * 3600000).toISOString(),
          category: 'article',
          tag: 'Tokenizacao',
          author: 'CryptoMonitor',
          rating: 4.1,
          votes: 11
        },
        {
          id: 'pt-a3',
          title: 'O que e XRP? Um guia simples para iniciantes',
          summary: 'Conheca a origem do XRP, seus casos de uso e as principais diferencas em relacao a Bitcoin e Ethereum.',
          source: 'CoinGecko',
          sourceSlug: 'coingecko',
          imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=220&fit=crop',
          url: 'https://www.coingecko.com/pt/aprenda',
          publishedAt: new Date(Date.now() - 48 * 3600000).toISOString(),
          category: 'article',
          tag: 'Moedas',
          author: 'CryptoMonitor',
          rating: 4.52,
          votes: 29
        },
        {
          id: 'pt-a4',
          title: 'Como avaliar risco em exchanges e carteiras digitais',
          summary: 'Boas praticas para seguranca, custodia, autenticacao e gestao de exposicao em plataformas cripto.',
          source: 'CryptoMonitor',
          sourceSlug: 'cryptomonitor',
          imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=220&fit=crop',
          url: 'https://www.coingecko.com/pt/aprenda',
          publishedAt: new Date(Date.now() - 60 * 3600000).toISOString(),
          category: 'article',
          tag: 'Seguranca',
          author: 'CryptoMonitor',
          rating: 4.63,
          votes: 8
        }
      ];
    }
    return [
      {
        id: 'a1',
        title: 'How to Get Bonding Curve Data from Memecoin Launchpads Using Python',
        summary: 'A step-by-step guide to extracting bonding curve data from popular memecoin launchpads using the CoinGecko API and Python.',
        source: 'CoinGecko',
        sourceSlug: 'coingecko',
        imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=220&fit=crop',
        url: 'https://coingecko.com/learn',
        publishedAt: new Date(Date.now() - 24 * 3600000).toISOString(),
        category: 'article',
        tag: 'API',
        author: 'Vikas Negi',
        rating: 4.0,
        votes: 3
      },
      {
        id: 'a2',
        title: 'GeckoPulse: RLUSD x Securitize — Tokenized Assets Explained',
        summary: 'An in-depth look at the partnership between RLUSD and Securitize, and what it means for tokenized real-world assets.',
        source: 'CoinGecko',
        sourceSlug: 'coingecko',
        imageUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=220&fit=crop',
        url: 'https://coingecko.com/learn',
        publishedAt: new Date(Date.now() - 36 * 3600000).toISOString(),
        category: 'article',
        tag: 'GeckoPulse',
        author: 'Loke Choon Khei',
        rating: 0,
        votes: 0
      },
      {
        id: 'a3',
        title: 'What Is XRP (Ripple)? A Beginner-Friendly Guide',
        summary: 'Everything you need to know about XRP — from its origins and use cases to how it differs from Bitcoin and Ethereum.',
        source: 'CoinGecko',
        sourceSlug: 'coingecko',
        imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=220&fit=crop',
        url: 'https://coingecko.com/learn',
        publishedAt: new Date(Date.now() - 48 * 3600000).toISOString(),
        category: 'article',
        tag: 'Coins & Tokens',
        author: 'CoinGecko',
        rating: 4.52,
        votes: 29
      },
      {
        id: 'a4',
        title: 'What Is StellaSwap? Low-Slippage Trading on Polkadot',
        summary: 'StellaSwap is the leading DEX on Polkadot, offering low-slippage swaps and deep liquidity for DOT ecosystem tokens.',
        source: 'CoinGecko',
        sourceSlug: 'coingecko',
        imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=220&fit=crop',
        url: 'https://coingecko.com/learn',
        publishedAt: new Date(Date.now() - 60 * 3600000).toISOString(),
        category: 'article',
        tag: 'Sponsored',
        author: 'CoinGecko',
        rating: 4.63,
        votes: 8
      }
    ];
  }
}
