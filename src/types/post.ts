export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export enum PostActionTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
}

interface FetchPostsAction {
  type: PostActionTypes.FETCH_POSTS;
}
interface FetchPostsSuccessAction {
  type: PostActionTypes.FETCH_POSTS_SUCCESS;
  payload: Post[];
}
interface FetchPostsErrorAction {
  type: PostActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}
export type PostAction = FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction;
