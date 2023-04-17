import { Component, OnInit } from '@angular/core';
import {
  catchError,
  combineLatest,
  distinctUntilChanged,
  EMPTY,
  map,
  Observable,
  switchMap,
} from 'rxjs';
import { MovieItem } from '../../shared/api/movie-api.types';
import { MovieApiService } from '../../shared/api/movie-api.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../shared/services/loading.service';
import { PaginatorService } from '../../shared/services/paginator/paginator.service';
import { PaginatorQueryParamsService } from '../../shared/services/paginator/paginator-query-params.service';
import { PaginatorLocalService } from '../../shared/services/paginator/paginator-local.service';

@Component({
  selector: 'mv-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  providers: [
    LoadingService,
    {
      provide: PaginatorService,
      useClass: PaginatorQueryParamsService,
    },
  ],
})
export class SearchPageComponent implements OnInit {
  public readonly films$ = combineLatest([
    this.route.queryParams.pipe(
      map((params) => params['term'] || ''),
      distinctUntilChanged()
    ),
    this.paginatorService.page$,
  ]).pipe(
    switchMap(([term, page]) =>
      this.loading$.load(
        this.movieApi.searchFilms(term, page).pipe(catchError(() => EMPTY))
      )
    )
  );

  constructor(
    private readonly movieApi: MovieApiService,
    private readonly route: ActivatedRoute,
    public readonly loading$: LoadingService,
    public readonly paginatorService: PaginatorService
  ) {}

  ngOnInit(): void {}

  trackBy(index: number, value: MovieItem) {
    return value.id;
  }
}
