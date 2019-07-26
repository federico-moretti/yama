import { fork, call, put, takeLatest } from 'redux-saga/effects';
import MoviesService, { MoviesByNameResponse } from '../../services/movies';
import {
  GetMovies,
  GetMoviesSucceeded,
  GetMoviesFailed,
} from '../movies/types';

function* watchGetMovies() {
  yield takeLatest('GET_MOVIES', fetchMovies);
}

function* fetchMovies(action: GetMovies) {
  try {
    // TS does not infer the yield calls yet
    // so we must define the variable type
    const data: MoviesByNameResponse = yield call(
      MoviesService.searchByName,
      action.payload
    );

    yield put<GetMoviesSucceeded>({
      type: 'GET_MOVIES_SUCCEEDED',
      payload: data,
    });
  } catch (error) {
    yield put<GetMoviesFailed>({
      type: 'GET_MOVIES_FAILED',
      payload: error,
    });
  }
}

export default function* root() {
  yield fork(watchGetMovies);
}
