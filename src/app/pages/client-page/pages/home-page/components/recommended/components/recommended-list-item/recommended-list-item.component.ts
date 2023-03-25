import { Component, Input, OnInit } from '@angular/core';
import { MovieItem } from '../../../../../../../../services/movie-api/movie-api.types';

@Component({
  selector: 'mv-recommended-list-item',
  templateUrl: './recommended-list-item.component.html',
  styleUrls: ['./recommended-list-item.component.scss']
})
export class RecommendedListItemComponent implements OnInit {

  @Input() item!: MovieItem;

  constructor() { }

  ngOnInit(): void {
  }

}
