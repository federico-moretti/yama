import { Movie } from '../../commons/types';

export interface MoviesState {
  movies: Movie[];
  page: number | null;
  totalPages: number | null;
  totalResults: number | null;
}

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCEEDED = 'GET_MOVIES_SUCCEEDED';

export interface GetMovies {
  type: typeof GET_MOVIES;
  payload: string;
}

export interface GetMoviesSucceeded {
  type: typeof GET_MOVIES_SUCCEEDED;
  payload: {
    movies: Movie[];
    page: number | null;
    totalPages: number | null;
    totalResults: number | null;
  };
}

export type MoviesActionTypes = GetMovies | GetMoviesSucceeded;
