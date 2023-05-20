import { Post, PostAction, PostActionTypes, PostRequestParams } from 'types/post';

export const fetchPosts = (payload: PostRequestParams): PostAction => ({
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
