import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MovieApiService } from "../services/movie-api/movie-api.service";


@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  providers: [
    MovieApiService
  ]
})
export class MovieModule { }
