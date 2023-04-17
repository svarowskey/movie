import { Injectable } from '@angular/core';
import { PaginatorService } from './paginator.service';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Injectable()
export class PaginatorLocalService extends PaginatorService {
  private readonly _page: BehaviorSubject<number> = new BehaviorSubject<number>(
    1
  );

  public page$ = this._page.asObservable().pipe(distinctUntilChanged());

  override set(page: number) {
    this._page.next(page);
  }
}
