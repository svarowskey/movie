import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPageRoutingModule } from './client-page-routing.module';
import { ClientPageComponent } from './client-page.component';
import { SidebarModule } from '../../components/sidebar/sidebar.module';


@NgModule({
  declarations: [
    ClientPageComponent
  ],
  imports: [
    CommonModule,
    ClientPageRoutingModule,
    SidebarModule
  ]
})
export class ClientPageModule { }
