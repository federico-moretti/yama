import {
  MoviesState,
  MoviesActionTypes,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIES_LOADING,
  GET_MOVIES_GENRES_SUCCESS,
  GET_MOVIES_GENRES_FAILURE,
} from './types';

const initialState: MoviesState = {
  movies: [],
  genres: [],
  page: null,
  totalPages: null,
  totalResults: null,
  error: null,
  didSearch: false,
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
        didSearch: true,
        error: null,
        loading: false,
      };
    case GET_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case GET_MOVIES_GENRES_SUCCESS:
      return {
        ...state,
        genres: action.payload,
      };
    case GET_MOVIES_GENRES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
