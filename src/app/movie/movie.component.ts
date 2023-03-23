import { Component, OnInit } from '@angular/core';
import { MovieApiService } from "../services/movie-api/movie-api.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor(
    public movieApiService: MovieApiService
  ) { }

  ngOnInit(): void {
    this.movieApiService.getPopularFilms()
      .subscribe(res => {
        console.log('res', res);
      })
  }

}
