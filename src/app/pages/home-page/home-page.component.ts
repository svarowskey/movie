import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../shared/api/movie-api.service';
import { map, Observable, shareReplay } from 'rxjs';
import { MovieItem } from '../../shared/api/movie-api.types';
import { SlideItem } from '../../shared/components/slider/types/slider.interface';

@Component({
  selector: 'mv-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  recommendedFilms$: Observable<MovieItem[]> = this.movieAPIService
    .getPopularFilms()
    .pipe(shareReplay(1));
  recommendedFilmsSlides$: Observable<SlideItem[]> =
    this.recommendedFilms$.pipe(
      map((films) =>
        films.slice(0, 3).map((film) => ({
          title: film.title,
          url:
            'https://image.tmdb.org/t/p/original' + (film.backdrop_path || ''),
        }))
      )
    );

  constructor(private movieAPIService: MovieApiService) {}

  ngOnInit(): void {}
}
