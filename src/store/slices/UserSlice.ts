import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store/index';
import { Post } from 'types/post';
import { User, UserState } from 'types/user';

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  userPosts: [],
  postsLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser: (state, action: PayloadAction<number>) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    fetchUserError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchUserPosts: (state) => {
      state.postsLoading = true;
    },
    fetchUserPostsSuccess: (state, action: PayloadAction<Post[]>) => {
      state.postsLoading = false;
      state.userPosts = action.payload;
    },
    fetchUserPostsError: (state, action: PayloadAction<string>) => {
      state.postsLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchUser,
  fetchUserSuccess,
  fetchUserError,
  fetchUserPosts,
  fetchUserPostsSuccess,
  fetchUserPostsError,
} = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state: RootState) => state.userReducer.user;
export const selectUserLoading = (state: RootState) => state.userReducer.loading;
export const selectUserPosts = (state: RootState) => state.userReducer.userPosts;
export const selectUserPostsLoading = (state: RootState) => state.userReducer.postsLoading;
