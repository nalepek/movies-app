import { FetchPopularMovies, FetchMovieDetails } from './../../store/actions/movie.actions';
import { getMovies, getLoading, getMovieDetails } from './../../store/selectors/movie.selector';
import { Component, OnInit } from '@angular/core';
import { MovieResponse } from '../shared/movie-response';
import { Movie } from '../shared/movie';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MovieDetails } from '../shared/movie-details';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  selectedMovie = {} as MovieDetails;
  
  public movies$: Observable<MovieResponse> = this.store.pipe(
    select(getMovies),
  );

  public loading$: Observable<boolean> = this.store.pipe(
    select(getLoading)
  );

  public selectedMovie$: Observable<MovieDetails> = this.store.pipe(
    select(getMovieDetails)
  );

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.fetchPopularMovies(1);

    this.selectedMovie$.subscribe((res) => this.selectedMovie = res);
  }

  onSelect(movie: Movie): void {
    this.store.dispatch(new FetchMovieDetails(movie.id, movie));
  }

  fetchPopularMovies(page: number): void {
    this.store.dispatch(new FetchPopularMovies(page));
  }
}
