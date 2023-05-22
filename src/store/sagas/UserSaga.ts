import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeEvery, put, delay, fork } from 'redux-saga/effects';

import { fetchPostsFromApi } from 'api/posts';
import { fetchUserFromApi } from 'api/users';
import {
  fetchUserError,
  fetchUserPosts,
  fetchUserPostsError,
  fetchUserPostsSuccess,
  fetchUserSuccess,
} from 'store/slices/UserSlice';
import { UserActionTypes } from 'types/user';

function* fetchUserWorker(userId: number) {
  try {
    yield delay(500);
    const { data } = yield call(fetchUserFromApi, userId);
    yield put(fetchUserSuccess(data));
  } catch (e) {
    yield put(fetchUserError('Произошла ошибка при загрузке данных о пользователе.'));
  }
}

function* fetchUserPostsWorker(userId: number) {
  try {
    yield put(fetchUserPosts());
    yield delay(1000);
    const { data } = yield call(fetchPostsFromApi, { userId });
    yield put(fetchUserPostsSuccess(data));
  } catch (e) {
    yield put(fetchUserPostsError('Произошла ошибка при загрузке постов пользователя.'));
  }
}

function* fetchAll({ payload }: PayloadAction<number>) {
  yield fork(fetchUserWorker, payload);
  yield fork(fetchUserPostsWorker, payload);
}

export function* userWatcher() {
  yield takeEvery(UserActionTypes.FETCH_USER, fetchAll);
}
