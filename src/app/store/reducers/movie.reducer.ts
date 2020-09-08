import { MovieResponse } from './../../movies/shared/movie-response';
import { MoviesActions, MovieActionTypes } from '../actions/movie.actions';
import { MovieDetails } from 'src/app/movies/shared/movie-details';

export interface MoviesState {
  loading: boolean;
  loaded: boolean;
  movies: MovieResponse;
  selectedMovie: MovieDetails;
  selectedMovieId: number;
}

export const moviesInitialState: MoviesState = {
  loading: false,
  loaded: false,
  movies: null,
  selectedMovie: null,
  selectedMovieId: null
};

export function MoviesReducer(state: MoviesState = moviesInitialState, action: MoviesActions): MoviesState {
  switch (action.type) {
    case MovieActionTypes.FETCH_POPULAR_MOVIES: {
      return {
        ...state,
        loading: true
      };
    }

    case MovieActionTypes.FETCH_POPULAR_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: action.movies,
        loading: false,
        loaded: true,
      };
    }

    case MovieActionTypes.FETCH_MOVIE_DETAILS: {
        return {
            ...state,
            selectedMovieId: action.movieId
        };
    }

    case MovieActionTypes.FETCH_MOVIE_DETAILS_SUCCESS: {
        return {
            ...state,
            selectedMovie: action.movie
        };
    }

    default: {
      return state;
    }
  }
}
