import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'mv-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnInit {
  @Input() currentPage: number = 0;
  @Input() countPages: number = 0;
  get pages(): number[] {
    return Array(this.countPages)
      .fill(undefined)
      .map((value, index) => index + 1);
  }

  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}
}
