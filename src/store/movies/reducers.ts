import { MoviesState, MoviesActionTypes, GET_MOVIES_SUCCEEDED } from './types';

const initialState: MoviesState = {
  movies: [],
};

export function moviesReducer(
  state = initialState,
  action: MoviesActionTypes
): MoviesState {
  switch (action.type) {
    case GET_MOVIES_SUCCEEDED:
      return {
        movies: action.payload,
      };

    default:
      return state;
  }
}
