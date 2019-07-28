import { Dispatch } from 'react';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension";

import { moviesReducer } from './movies/reducers';
import { MoviesActionTypes } from './movies/types';
import rootSaga from './sagas';

const rootReducer = combineReducers({
  moviesState: moviesReducer,
});

const sagaMiddleware = createSagaMiddleware();
export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}

export type ActionTypes = MoviesActionTypes;

export type AppState = ReturnType<typeof rootReducer>;

// exports dispatch with types
export function useDispatch() {
  return useReduxDispatch<Dispatch<ActionTypes>>();
}

// exports selector with types
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
