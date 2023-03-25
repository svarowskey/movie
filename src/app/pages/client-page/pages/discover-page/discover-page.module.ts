import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverPageRoutingModule } from './discover-page-routing.module';
import { DiscoverPageComponent } from './discover-page.component';


@NgModule({
  declarations: [
    DiscoverPageComponent
  ],
  imports: [
    CommonModule,
    DiscoverPageRoutingModule
  ]
})
export class DiscoverPageModule { }
