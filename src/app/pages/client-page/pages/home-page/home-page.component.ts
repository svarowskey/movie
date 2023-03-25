import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../../../services/movie-api/movie-api.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { MovieItem } from '../../../../services/movie-api/movie-api.types';
import { SlideItem } from '../../../../components/slider/types/slider.interface';

@Component({
  selector: 'mv-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  recommendedFilms$: Observable<MovieItem[]> = this.movieAPIService.getPopularFilms();
  recommendedFilmsSlides: SlideItem[] = [];

  constructor(
    private movieAPIService: MovieApiService
  ) {
    const unsubscribe$ = new Subject<boolean>();
    this.recommendedFilms$
      .pipe(
        takeUntil(unsubscribe$)
      )
      .subscribe(value => {
        if (value?.length) {
          this.recommendedFilmsSlides = value.slice(0, 3).map(film => {
            return {
              title: film.title,
              url: 'https://image.tmdb.org/t/p/original' + (film.backdrop_path || '')
            }
          })
        } else {
          this.recommendedFilmsSlides = [];
        }
        unsubscribe$.next(true);
        unsubscribe$.complete();
      })
  }

  ngOnInit(): void {
  }

}
