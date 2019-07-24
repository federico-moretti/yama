import { fork, call, put, takeLatest } from 'redux-saga/effects';
import { getMovies } from '../../services/movies';
import {
  MoviesActionTypes,
  GetMovies,
  GetMoviesSucceeded,
} from '../movies/types';

function* watchGetMovies() {
  yield takeLatest('GET_MOVIES', fetchMovies);
}

function* fetchMovies(action: GetMovies) {
  const { error, data } = yield call(getMovies, action.payload);
  if (!error) {
    yield put<GetMoviesSucceeded>({
      type: 'GET_MOVIES_SUCCEEDED',
      payload: data,
    });
  } else {
    yield put<MoviesActionTypes>({
      type: 'GET_MOVIES_SUCCEEDED',
      payload: data,
    });
  }
}

export default function* root() {
  yield fork(watchGetMovies);
}
