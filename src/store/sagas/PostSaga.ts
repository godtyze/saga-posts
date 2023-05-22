import { PayloadAction } from '@reduxjs/toolkit';
import { call, takeEvery, put, delay } from 'redux-saga/effects';

import { fetchCommentsFromApi, fetchPostsFromApi } from 'api/posts';
import {
  fetchPostCommentsError,
  fetchPostCommentsSuccess,
  fetchPostsError,
  fetchPostsSuccess,
} from 'store/slices/PostSlice';
import { PostActionTypes, PostRequestParams } from 'types/post';

function* fetchPostsWorker({ payload }: PayloadAction<PostRequestParams>) {
  try {
    yield delay(750);
    const { data } = yield call(fetchPostsFromApi, payload);
    yield put(fetchPostsSuccess(data));
  } catch (e) {
    yield put(fetchPostsError('Произошла ошибка при загрузке постов.'));
  }
}

function* fetchPostCommentsWorker({ payload }: PayloadAction<number>) {
  try {
    yield delay(500);
    const { data } = yield call(fetchCommentsFromApi, payload);
    yield put(fetchPostCommentsSuccess({ postId: payload, comments: data }));
  } catch (e) {
    yield put(
      fetchPostCommentsError({
        postId: payload,
        errorMessage: 'Произошла ошибка при загрузке комментариев',
      })
    );
  }
}

export function* postsWatcher() {
  yield takeEvery(PostActionTypes.FETCH_POSTS, fetchPostsWorker);
  yield takeEvery(PostActionTypes.FETCH_POST_COMMENTS, fetchPostCommentsWorker);
}
