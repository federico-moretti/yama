import { fork, call, put, takeLatest } from 'redux-saga/effects';
import MoviesService, { MoviesByNameResponse } from '../../services/movies';
import {
  GetMoviesRequest,
  GetMoviesSuccess,
  GetMoviesFailure,
  GetMoviesLoading,
} from '../movies/types';

function* watchGetMovies() {
  yield takeLatest('GET_MOVIES_REQUEST', fetchMovies);
}

function* fetchMovies(action: GetMoviesRequest) {
  try {
    yield put<GetMoviesLoading>({
      type: 'GET_MOVIES_LOADING',
    });

    // TS does not infer the yield calls yet
    // so we must define the variable type
    const data: MoviesByNameResponse = yield call(
      MoviesService.searchByName,
      action.payload
    );

    yield put<GetMoviesSuccess>({
      type: 'GET_MOVIES_SUCCESS',
      payload: data,
    });
  } catch (error) {
    yield put<GetMoviesFailure>({
      type: 'GET_MOVIES_FAILURE',
      payload: error,
    });
  }
}

export default function* root() {
  yield fork(watchGetMovies);
}
