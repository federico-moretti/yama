import { Movie } from '../../commons/types';

export interface MoviesState {
  movies: Movie[];
  page: number | null;
  totalPages: number | null;
  totalResults: number | null;
  loading: boolean;
  error: Error | null;
}

export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES_LOADING = 'GET_MOVIES_LOADING';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

export interface GetMoviesRequest {
  type: typeof GET_MOVIES_REQUEST;
  payload: string;
}

export interface GetMoviesLoading {
  type: typeof GET_MOVIES_LOADING;
}

export interface GetMoviesSuccess {
  type: typeof GET_MOVIES_SUCCESS;
  payload: {
    movies: Movie[];
    page: number | null;
    totalPages: number | null;
    totalResults: number | null;
  };
}

export interface GetMoviesFailure {
  type: typeof GET_MOVIES_FAILURE;
  payload: Error;
}

export type MoviesActionTypes =
  | GetMoviesRequest
  | GetMoviesLoading
  | GetMoviesSuccess
  | GetMoviesFailure;
