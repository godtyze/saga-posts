import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeEvery, put, delay, fork } from 'redux-saga/effects';

import { fetchUserFromApi } from 'api/users';
import { fetchPosts, fetchPostsError } from 'store/slices/PostSlice';
import { fetchUserError, fetchUserSuccess } from 'store/slices/UserSlice';
import { UserActionTypes } from 'types/user';

function* fetchUserWorker(userId: number) {
  try {
    yield delay(350);
    const { data } = yield call(fetchUserFromApi, userId);
    yield put(fetchUserSuccess(data));
  } catch (e) {
    yield put(fetchUserError('Произошла ошибка при загрузке данных о пользователе.'));
  }
}

function* fetchUserPostsWorker(userId: number) {
  try {
    yield put(fetchPosts({ userId }));
  } catch (e) {
    yield put(fetchPostsError('Произошла ошибка при загрузке постов.'));
  }
}

function* fetchAll({ payload }: PayloadAction<number>) {
  yield fork(fetchUserWorker, payload);
  yield fork(fetchUserPostsWorker, payload);
}

export function* userWatcher() {
  yield takeEvery(UserActionTypes.FETCH_USER, fetchAll);
}
