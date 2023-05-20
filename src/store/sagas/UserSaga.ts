import { call, takeEvery, put, delay } from 'redux-saga/effects';

import { fetchPostsFromApi } from 'api/posts';
import { fetchUserFromApi } from 'api/users';
import {
  fetchUserError,
  fetchUserPostsError,
  fetchUserPostsSuccess,
  fetchUserSuccess,
} from 'store/actions/UserActions';
import { FetchUserAction, UserActionTypes } from 'types/user';

function* fetchUserWorker({ payload }: FetchUserAction) {
  try {
    yield delay(500);
    const { data } = yield call(fetchUserFromApi, payload);
    yield put(fetchUserSuccess(data));
  } catch (e) {
    yield put(fetchUserError('Произошла ошибка при загрузке данных о пользователе.'));
  }
}

function* fetchUserPostsWorker({ payload }: FetchUserAction) {
  try {
    yield delay(500);
    const { data } = yield call(fetchPostsFromApi, { userId: payload });
    yield put(fetchUserPostsSuccess(data));
  } catch (e) {
    yield put(fetchUserPostsError('Произошла ошибка при загрузке постов пользователя.'));
  }
}

export function* userWatcher() {
  yield takeEvery(UserActionTypes.FETCH_USER, fetchUserWorker);
  yield takeEvery(UserActionTypes.FETCH_USER_POSTS, fetchUserPostsWorker);
}
