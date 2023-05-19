import { Post, PostAction, PostActionTypes } from 'types/post';

export const fetchPosts = (payload: number): PostAction => ({
  type: PostActionTypes.FETCH_POSTS,
  payload,
});
export const fetchPostsSuccess = (payload: Post[]): PostAction => ({
  type: PostActionTypes.FETCH_POSTS_SUCCESS,
  payload,
});

export const fetchPostsError = (payload: string): PostAction => ({
  type: PostActionTypes.FETCH_POSTS_ERROR,
  payload,
});

export const setTodoPage = (payload: number): PostAction => {
  return { type: PostActionTypes.SET_POST_PAGE, payload };
};
