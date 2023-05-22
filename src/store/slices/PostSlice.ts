import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store/index';
import {
  Post,
  PostCommentsErrorPayload,
  PostCommentsSuccessPayload,
  PostRequestParams,
  PostState,
} from 'types/post';

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
  page: 1,
  limit: 5,
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPosts: (state, action: PayloadAction<PostRequestParams>) => {
      state.loading = true;
    },
    fetchPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchPostsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchPostComments: (state, action: PayloadAction<number>) => {
      const candidate = state.posts.find((post) => post.id === action.payload);
      if (candidate) {
        candidate.commentsLoading = true;
      }
    },
    fetchPostCommentsSuccess: (state, action: PayloadAction<PostCommentsSuccessPayload>) => {
      const candidate = state.posts.find((post) => post.id === action.payload.postId);
      if (candidate) {
        candidate.commentsLoading = false;
        candidate.comments = action.payload.comments;
      }
    },
    fetchPostCommentsError: (state, action: PayloadAction<PostCommentsErrorPayload>) => {
      const candidate = state.posts.find((post) => post.id === action.payload.postId);
      if (candidate) {
        candidate.commentsLoading = false;
        candidate.commentsError = action.payload.errorMessage;
      }
    },
    setPostsPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsError,
  setPostsPage,
  fetchPostComments,
  fetchPostCommentsSuccess,
  fetchPostCommentsError,
} = postSlice.actions;
export default postSlice.reducer;

export const selectPage = (state: RootState) => state.postReducer.page;
export const selectLimit = (state: RootState) => state.postReducer.limit;
export const selectPosts = (state: RootState) => state.postReducer.posts;
export const selectPostsLoading = (state: RootState) => state.postReducer.loading;
export const selectPostComments = (postId: number) => (state: RootState) =>
  state.postReducer.posts.find((post) => post.id === postId)?.comments;
export const selectPostCommentsLoading = (postId: number) => (state: RootState) =>
  state.postReducer.posts.find((post) => post.id === postId)?.commentsLoading;
