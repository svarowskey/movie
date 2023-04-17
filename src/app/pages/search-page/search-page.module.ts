import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { SearchFieldModule } from '../../features/search/components/search-field/search-field.module';
import { FilmCardModule } from '../../features/films/components/film-card/film-card.module';
import { PaginatorModule } from '../../shared/components/paginator/paginator.module';
import { PaginatorServiceModule } from '../../shared/directives/paginator-service/paginator-service.module';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    SearchFieldModule,
    FilmCardModule,
    PaginatorModule,
    PaginatorServiceModule,
  ],
})
export class SearchPageModule {}
