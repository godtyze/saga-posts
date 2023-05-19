import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { postReducer } from 'store/reducers/PostReducer';
import { userReducer } from 'store/reducers/UserReducer';

export const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const rootReducer = combineReducers({
  postReducer,
  userReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
