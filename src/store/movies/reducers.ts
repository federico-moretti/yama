import {
  MoviesState,
  MoviesActionTypes,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIES_LOADING,
} from './types';

const initialState: MoviesState = {
  movies: [],
  page: null,
  totalPages: null,
  totalResults: null,
  error: null,
  loading: false,
};

export function moviesReducer(
  state = initialState,
  action: MoviesActionTypes
): MoviesState {
  switch (action.type) {
    case GET_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload.movies,
        page: action.payload.page,
        totalPages: action.payload.totalPages,
        totalResults: action.payload.totalResults,
        error: null,
        loading: false,
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
