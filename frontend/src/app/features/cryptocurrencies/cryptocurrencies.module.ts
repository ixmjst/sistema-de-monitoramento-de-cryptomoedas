import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CryptocurrenciesComponent } from './cryptocurrencies.component';

const routes: Routes = [
  { path: '', component: CryptocurrenciesComponent }
];

@NgModule({
  declarations: [
    CryptocurrenciesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ]
})
export class CryptocurrenciesModule { }
