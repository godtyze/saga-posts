import { call, takeEvery, put } from 'redux-saga/effects';

import { fetchPostsFromApi } from 'api/posts';
import { fetchPostsError, fetchPostsSuccess } from 'store/actions/PostActions';
import { FetchPostsAction, PostActionTypes } from 'types/post';

function* fetchPostsWorker({ payload }: FetchPostsAction) {
  try {
    const { data } = yield call(fetchPostsFromApi, payload);
    yield put(fetchPostsSuccess(data));
  } catch (e) {
    yield put(fetchPostsError('Произошла ошибка при загрузке постов.'));
  }
}

export function* postsWatcher() {
  yield takeEvery(PostActionTypes.FETCH_POSTS, fetchPostsWorker);
}
