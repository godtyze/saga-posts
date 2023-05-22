export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: PostCommentType[];
  commentsLoading?: boolean;
  commentsError?: string;
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

interface PostCommentsPayload {
  postId: number;
}

export interface PostCommentsSuccessPayload extends PostCommentsPayload {
  comments: PostCommentType[];
}

export interface PostCommentsErrorPayload extends PostCommentsPayload {
  errorMessage: string;
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
  FETCH_POST_COMMENTS = 'post/fetchPostComments',
  FETCH_POST_COMMENTS_SUCCESS = 'post/fetchPostCommentsSuccess',
  FETCH_POST_COMMENTS_ERROR = 'post/fetchPostCommentsError',
  SET_POST_PAGE = 'post/setPostsPage',
}
