import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NewsSourceIconComponent } from './components/news-source-icon/news-source-icon.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { MarketTickerComponent } from './components/market-ticker/market-ticker.component';

@NgModule({
  declarations: [NewsSourceIconComponent, ScrollToTopComponent, MarketTickerComponent],
  imports: [CommonModule, TranslateModule],
  exports: [CommonModule, TranslateModule, NewsSourceIconComponent, ScrollToTopComponent, MarketTickerComponent]
})
export class SharedModule {}
