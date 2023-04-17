import { Directive, OnInit, Self } from '@angular/core';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { DestroyService } from '../../services/destroy.service';
import { PaginatorService } from '../../services/paginator/paginator.service';
import { takeUntil } from 'rxjs';

@Directive({
  selector: 'mv-paginator[mvPaginatorService]',
  providers: [DestroyService],
})
export class PaginatorServiceDirective implements OnInit {
  constructor(
    @Self() private readonly paginatorComponent: PaginatorComponent,
    private readonly destroy$: DestroyService,
    private readonly paginatorService: PaginatorService
  ) {}

  ngOnInit() {
    this.paginatorService.page$
      .pipe(takeUntil(this.destroy$))
      .subscribe((page) => (this.paginatorComponent.currentPage = page));

    this.paginatorComponent.change
      .pipe(takeUntil(this.destroy$))
      .subscribe((page) => this.paginatorService.set(page));
  }
}
