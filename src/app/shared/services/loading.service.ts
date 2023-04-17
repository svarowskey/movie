import { Injectable } from '@angular/core';
import { BehaviorSubject, defer, finalize, Observable, tap } from 'rxjs';

@Injectable()
export class LoadingService extends BehaviorSubject<boolean> {
  load<T>(request: Observable<T>): Observable<T> {
    return defer(() => {
      this.next(true);
      return request;
    }).pipe(
      tap(() => this.next(false)),
      finalize(() => this.next(false))
    );
  }
}
