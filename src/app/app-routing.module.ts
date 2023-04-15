import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './core/layouts/client-layout/client-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('@pages/home-page/home-page.module').then(
            (m) => m.HomePageModule
          ),
      },
      {
        path: 'discover',
        loadChildren: () =>
          import('@pages/discover-page/discover-page.module').then(
            (m) => m.DiscoverPageModule
          ),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('@pages/search-page/search-page.module').then(
            (m) => m.SearchPageModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
