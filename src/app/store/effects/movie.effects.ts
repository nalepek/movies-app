import { FetchMovieDetails, FetchMovieDetailsSuccess } from './../actions/movie.actions';
import { MovieResponse } from './../../movies/shared/movie-response';
import { Injectable } from '@angular/core';

import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { FetchPopularMovies, MovieActionTypes, FetchPopularMoviesSuccess } from '../actions/movie.actions';
import { MovieService } from 'src/app/services/movie/movie.service';
import { MovieDetails } from 'src/app/movies/shared/movie-details';

@Injectable()
export class MoviesEffects {
    constructor(
        private actions$: Actions,
        private readonly moviesService: MovieService,
    ) { }

    @Effect()
    public fetchPopularMovies$ = this.actions$.pipe(
        ofType<FetchPopularMovies>(MovieActionTypes.FETCH_POPULAR_MOVIES),
        switchMap((action) => {
            return this.moviesService.getPopularMovies(action.page).pipe(
                map((movies: MovieResponse) => new FetchPopularMoviesSuccess(movies)));
            //catchError((error: ErrorData) => of(new FetchMoviesFail(error)))),
        }),
    );

    @Effect()
    public fetchMovieDetails$ = this.actions$.pipe(
      ofType<FetchMovieDetails>(MovieActionTypes.FETCH_MOVIE_DETAILS),
      switchMap((action) => {
          return this.moviesService.getMovieDetails(action.movieId).pipe(
              map((movie: MovieDetails) => new FetchMovieDetailsSuccess(movie))
          );
      })
    );  
}
