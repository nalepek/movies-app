import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from '../reducers/movie.reducer';

export const getMoviesState = createFeatureSelector<MoviesState>('movies');

export const getLoading = createSelector(
    getMoviesState,
    (state: MoviesState) => state.loading
);

export const getMovies = createSelector(
    getMoviesState,
    (state: MoviesState) => state.movies
);

export const getMovieDetails = createSelector(
    getMoviesState,
    (state: MoviesState) => state.selectedMovie
);
