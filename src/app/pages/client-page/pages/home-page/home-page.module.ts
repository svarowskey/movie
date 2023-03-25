import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { RecommendedListComponent } from './components/recommended/components/recommended-list/recommended-list.component';
import { RecommendedListItemComponent } from './components/recommended/components/recommended-list-item/recommended-list-item.component';
import { MovieApiService } from '../../../../services/movie-api/movie-api.service';
import { SharedComponentsModule } from '../../../../components/shared-components.module';
import { SliderModule } from '../../../../components/slider/slider.module';


@NgModule({
  declarations: [
    HomePageComponent,
    RecommendedComponent,
    RecommendedListComponent,
    RecommendedListItemComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedComponentsModule,
    SliderModule
  ],
  providers: [
    MovieApiService
  ]
})
export class HomePageModule { }
