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
  FETCH_USER = 'user/fetchUser',
  FETCH_USER_SUCCESS = 'user/fetchUserSuccess',
  FETCH_USER_ERROR = 'user/fetchUserError',
  FETCH_USER_POSTS = 'user/fetchUserPosts',
  FETCH_USER_POSTS_SUCCESS = 'user/fetchUserPostsSuccess',
  FETCH_USER_POSTS_ERROR = 'user/fetchUserPostsError',
}
