import { all } from 'redux-saga/effects';

import { postsWatcher } from 'store/sagas/PostSaga';
import { userWatcher } from 'store/sagas/UserSaga';

export default function* rootWatcher() {
  yield all([postsWatcher(), userWatcher()]);
}
