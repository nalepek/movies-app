import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import { MoviesReducer } from './movie.reducer';
import { MoviesState } from './movie.reducer';

export interface AppState {
  movies: MoviesState;
}

export const appStoreReducer: any = {
  movies: MoviesReducer,
};

export const getAppState = createFeatureSelector<AppState>('app');

export const reducers: ActionReducerMap<AppState> = {
  movies: MoviesReducer,
};
