import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { RecommendedListComponent } from './components/recommended/components/recommended-list/recommended-list.component';
import { SliderModule } from '../../shared/components/slider/slider.module';
import { FilmCardModule } from '../../features/films/components/film-card/film-card.module';
import { SearchFieldModule } from '../../features/search/components/search-field/search-field.module';

@NgModule({
  declarations: [
    HomePageComponent,
    RecommendedComponent,
    RecommendedListComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SliderModule,
    FilmCardModule,
    SearchFieldModule,
  ],
})
export class HomePageModule {}
