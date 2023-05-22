import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store/index';
import { Post, PostRequestParams, PostState } from 'types/post';

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
    setPostsPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { fetchPosts, fetchPostsSuccess, fetchPostsError, setPostsPage } = postSlice.actions;
export default postSlice.reducer;

export const selectPage = (state: RootState) => state.postReducer.page;
export const selectLimit = (state: RootState) => state.postReducer.limit;
export const selectPosts = (state: RootState) => state.postReducer.posts;
export const selectPostsLoading = (state: RootState) => state.postReducer.loading;
