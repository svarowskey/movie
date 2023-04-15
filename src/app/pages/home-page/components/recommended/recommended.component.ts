import { Component, Input, OnInit } from '@angular/core';
import { MovieItem } from '../../../../shared/api/movie-api.types';

@Component({
  selector: 'mv-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
})
export class RecommendedComponent implements OnInit {
  @Input() films: MovieItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
