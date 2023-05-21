import { Post } from 'types/post';
import { User, UserAction, UserActionTypes } from 'types/user';

export const fetchUser = (payload: number): UserAction => ({
  type: UserActionTypes.FETCH_USER,
  payload,
});
export const fetchUserSuccess = (payload: User): UserAction => ({
  type: UserActionTypes.FETCH_USER_SUCCESS,
  payload,
});

export const fetchUserError = (payload: string): UserAction => ({
  type: UserActionTypes.FETCH_USER_ERROR,
  payload,
});

export const fetchUserPosts = (): UserAction => ({
  type: UserActionTypes.FETCH_USER_POSTS,
});
export const fetchUserPostsSuccess = (payload: Post[]): UserAction => ({
  type: UserActionTypes.FETCH_USER_POSTS_SUCCESS,
  payload,
});

export const fetchUserPostsError = (payload: string): UserAction => ({
  type: UserActionTypes.FETCH_USER_POSTS_ERROR,
  payload,
});
