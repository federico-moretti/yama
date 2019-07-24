import { Movie } from '../../commons/interfaces';

export interface MoviesState {
  movies: Movie[];
}

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCEEDED = 'GET_MOVIES_SUCCEEDED';

export interface GetMovies {
  type: typeof GET_MOVIES;
  payload: string;
}

export interface GetMoviesSucceeded {
  type: typeof GET_MOVIES_SUCCEEDED;
  payload: Movie[];
}

export type MoviesActionTypes = GetMovies | GetMoviesSucceeded;
