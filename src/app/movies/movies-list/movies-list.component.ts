import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { MovieResponse } from '../shared/movie-response';
import { Movie } from '../shared/movie';
import { MovieService } from 'src/app/services/movie/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: MovieResponse;

  selectedMovie = {} as Movie;

  constructor(private movieService: MovieService,
              private dataService: DataService) { }

  ngOnInit() {
    this.getPopularMovies(1);
  }

  getPopularMovies(page?: number): void {
    this.movieService.getPopularMovies(page)
      .subscribe((movies: MovieResponse) => {
        this.movies = movies;
      });
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;

    this.dataService.nextData(movie);
  }
}
