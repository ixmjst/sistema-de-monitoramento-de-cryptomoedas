import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'cryptocurrencies',
        loadChildren: () =>
          import('./features/cryptocurrencies/cryptocurrencies.module').then(
            (m) => m.CryptocurrenciesModule
          ),
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('./features/favorites/favorites.module').then((m) => m.FavoritesModule),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('./features/history/history.module').then((m) => m.HistoryModule),
      },
      {
        path: 'export',
        loadChildren: () =>
          import('./features/export/export.module').then((m) => m.ExportModule),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
