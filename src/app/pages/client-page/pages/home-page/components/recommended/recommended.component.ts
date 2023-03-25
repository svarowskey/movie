import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieItem } from '../../../../../../services/movie-api/movie-api.types';

@Component({
  selector: 'mv-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  @Input() films$!: Observable<MovieItem[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
