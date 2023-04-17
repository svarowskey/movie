import { Injectable } from '@angular/core';
import { PaginatorService } from './paginator.service';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginatorQueryParamsService extends PaginatorService {
  public readonly page$ = this.route.queryParams.pipe(
    map((params) => Number(params['page']) || 1),
    distinctUntilChanged()
  );

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    super();
  }

  override set(page: number) {
    this.router.navigate([], {
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
  }
}
