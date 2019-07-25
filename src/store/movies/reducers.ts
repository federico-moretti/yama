import { MoviesState, MoviesActionTypes, GET_MOVIES_SUCCEEDED } from './types';

const initialState: MoviesState = {
  movies: [],
  page: null,
  totalPages: null,
  totalResults: null,
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

    default:
      return state;
  }
}
