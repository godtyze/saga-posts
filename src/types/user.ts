import { Post } from 'types/post';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
  userPosts: Post[];
  postsLoading: boolean;
}

export enum UserActionTypes {
  FETCH_USER = 'FETCH_USER',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_FETCH_USERS_ERROR',
  FETCH_USER_POSTS = 'FETCH_USER_POSTS',
  FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS',
  FETCH_USER_POSTS_ERROR = 'FETCH_USER_POSTS_ERROR',
}
export interface FetchUserAction {
  type: UserActionTypes.FETCH_USER;
  payload: number;
}
export interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USER_SUCCESS;
  payload: User;
}

export interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}

export interface FetchUserPostsAction {
  type: UserActionTypes.FETCH_USER_POSTS;
}
export interface FetchUserPostsSuccessAction {
  type: UserActionTypes.FETCH_USER_POSTS_SUCCESS;
  payload: Post[];
}

export interface FetchUserPostsErrorAction {
  type: UserActionTypes.FETCH_USER_POSTS_ERROR;
  payload: string;
}

export type UserAction =
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction
  | FetchUserPostsAction
  | FetchUserPostsSuccessAction
  | FetchUserPostsErrorAction;
