import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPageComponent } from './client-page.component';


const routes: Routes = [
  {
    path: '',
    component: ClientPageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
      { path: 'discover', loadChildren: () => import('./pages/discover-page/discover-page.module').then(m => m.DiscoverPageModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPageRoutingModule { }
