import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ExportComponent } from './export.component';

const routes: Routes = [
  { path: '', component: ExportComponent }
];

@NgModule({
  declarations: [ExportComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ]
})
export class ExportModule { }
