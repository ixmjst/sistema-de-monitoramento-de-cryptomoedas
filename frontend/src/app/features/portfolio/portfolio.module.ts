import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PortfolioRoutingModule,
    TranslateModule
  ]
})
export class PortfolioModule { }
