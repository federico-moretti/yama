import {
  MoviesState,
  MoviesActionTypes,
  GET_MOVIES_SUCCEEDED,
  GET_MOVIES_FAILED,
} from './types';

const initialState: MoviesState = {
  movies: [],
  page: null,
  totalPages: null,
  totalResults: null,
  error: null,
};

export function moviesReducer(
  state = initialState,
  action: MoviesActionTypes
): MoviesState {
  switch (action.type) {
    case GET_MOVIES_SUCCEEDED:
      return {
        ...state,
        movies: action.payload.movies,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        totalResults: action.payload.totalResults,
      };
    case GET_MOVIES_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
