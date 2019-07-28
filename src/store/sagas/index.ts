import { spawn, call, put, takeLatest } from 'redux-saga/effects';
import MoviesService, {
  MoviesByNameResponse,
  MoviesGenresResponse,
} from '../../services/movies';
import {
  GetMoviesRequest,
  GetMoviesSuccess,
  GetMoviesFailure,
  GetMoviesLoading,
  GetMoviesGenresSuccess,
  GetMoviesGenresFailure,
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

function* watchGetGenres() {
  yield takeLatest('GET_MOVIES_GENRES_REQUEST', fetchGenres);
}

function* fetchGenres() {
  try {
    const data: MoviesGenresResponse = yield call(MoviesService.getGenres);

    yield put<GetMoviesGenresSuccess>({
      type: 'GET_MOVIES_GENRES_SUCCESS',
      payload: data,
    });
  } catch (error) {
    yield put<GetMoviesGenresFailure>({
      type: 'GET_MOVIES_GENRES_FAILURE',
      payload: error,
    });
  }
}

// https://redux-saga.js.org/docs/advanced/RootSaga.html
export default function* root() {
  yield spawn(watchGetMovies);
  yield spawn(watchGetGenres);
}
