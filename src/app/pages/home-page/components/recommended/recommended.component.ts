import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../../../services/movie-api/movie-api.service';
import { Observable } from 'rxjs';
import { MovieItem } from '../../../../services/movie-api/movie-api.types';

@Component({
  selector: 'mv-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  films$: Observable<MovieItem[]> = this.movieAPIService.getPopularFilms();

  constructor(
    private movieAPIService: MovieApiService
  ) { }

  ngOnInit(): void {
  }

}
