import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, throwError } from 'rxjs';
import { MovieItem, MovieResponse } from './movie-api.types';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private httpParams = {
    api_key: environment.api_key_TMDB,
    language: 'ru',
    include_image_language: 'ru',
  };

  constructor(private httpClient: HttpClient) {}

  getFilmsByTitle(title: string): Observable<any> {
    return this.httpClient.get(
      // 'https://streaming-availability.p.rapidapi.com/v2/search/title',
      'https://www.omdbapi.com/',
      {
        params: {},
      }
    );
  }

  getPopularFilms(): Observable<MovieItem[]> {
    return this.httpClient
      .get<MovieResponse>('https://api.themoviedb.org/3/movie/popular', {
        params: this.httpParams,
      })
      .pipe(map((res) => res.results));
  }

  searchFilms(term: string, page: number): Observable<MovieItem[]> {
    return this.httpClient
      .get<MovieResponse>('https://api.themoviedb.org/3/search/movie', {
        params: {
          ...this.httpParams,
          query: term,
          page,
        },
      })
      .pipe(map((res) => res.results));
  }

  getGenres() {
    return this.httpClient.get(
      'https://api.themoviedb.org/3/genre/movie/list',
      {
        params: this.httpParams,
      }
    );
  }
}
