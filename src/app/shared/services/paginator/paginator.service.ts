import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export abstract class PaginatorService {
  public abstract readonly page$: Observable<number>;

  public abstract set(page: number): void;
}
