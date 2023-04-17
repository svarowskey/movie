import { Component, Input, OnInit } from '@angular/core';
import { MovieItem } from '../../../../shared/api/movie-api.types';

@Component({
  selector: 'mv-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent implements OnInit {
  @Input() item!: MovieItem;
  constructor() {}

  ngOnInit(): void {}
}
