import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HistoryComponent } from './history.component';

const routes: Routes = [
  { path: '', component: HistoryComponent }
];

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ]
})
export class HistoryModule { }
