import { Component, Input, OnInit } from '@angular/core';
import { RecommendedListItem } from '../../recommended.types';
import { MovieItem } from '../../../../../../shared/api/movie-api.types';

@Component({
  selector: 'mv-recommended-list',
  templateUrl: './recommended-list.component.html',
  styleUrls: ['./recommended-list.component.scss'],
})
export class RecommendedListComponent implements OnInit {
  @Input() list!: MovieItem[] | null;

  constructor() {}

  ngOnInit(): void {}
}
