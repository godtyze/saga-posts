import { all } from 'redux-saga/effects';

import { postsWatcher } from 'store/sagas/PostSaga';

export function* rootWatcher() {
  yield all([postsWatcher()]);
}
