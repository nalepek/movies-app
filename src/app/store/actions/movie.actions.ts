import { MovieResponse } from './../../movies/shared/movie-response';
import { Action } from '@ngrx/store';
import { MovieDetails } from 'src/app/movies/shared/movie-details';

export enum MovieActionTypes {
  FETCH_POPULAR_MOVIES = '[Movies] Fetch movies',
  FETCH_POPULAR_MOVIES_SUCCESS = '[Movies] Fetch movies success',
  FETCH_MOVIE_DETAILS = '[Movie] Fetch movie details',
  FETCH_MOVIE_DETAILS_SUCCESS = '[Movie] Fetch movie details success'
}

export class FetchPopularMovies implements Action {
  readonly type = MovieActionTypes.FETCH_POPULAR_MOVIES;

  constructor(public page: number) {}
}

export class FetchPopularMoviesSuccess implements Action {
  readonly type = MovieActionTypes.FETCH_POPULAR_MOVIES_SUCCESS;

  constructor(public movies: MovieResponse) { }
}

export class FetchMovieDetails implements Action {
    readonly type = MovieActionTypes.FETCH_MOVIE_DETAILS;

    constructor(public movieId: number, public movie?: MovieDetails) { }
}

export class FetchMovieDetailsSuccess implements Action {
    readonly type = MovieActionTypes.FETCH_MOVIE_DETAILS_SUCCESS;

    constructor(public movie: MovieDetails) { }
}

export type MoviesActions =
  | FetchPopularMovies
  | FetchPopularMoviesSuccess
  | FetchMovieDetails
  | FetchMovieDetailsSuccess ;
