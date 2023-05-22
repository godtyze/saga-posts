export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: PostCommentType[];
  commentsLoading: boolean;
}

export interface PostRequestParams {
  page?: number;
  limit?: number;
  userId?: number;
}

export interface PostCommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  page: number;
  limit: number;
}

export enum PostActionTypes {
  FETCH_POSTS = 'post/fetchPosts',
  FETCH_POSTS_SUCCESS = 'post/fetchPostsSuccess',
  FETCH_POSTS_ERROR = 'post/fetchPostsError',
  SET_POST_PAGE = 'post/setPostsPage',
}
