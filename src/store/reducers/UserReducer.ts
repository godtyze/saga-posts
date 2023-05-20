import { RootState } from 'store/index';
import { UserAction, UserActionTypes, UserState } from 'types/user';

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  userPosts: [],
  postsLoading: false,
};

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER:
      return { ...state, loading: true };
    case UserActionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case UserActionTypes.FETCH_USER_ERROR:
      return { ...state, loading: false, error: action.payload };
    case UserActionTypes.FETCH_USER_POSTS:
      return { ...state, postsLoading: true };
    case UserActionTypes.FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        postsLoading: false,
        userPosts: action.payload,
      };
    case UserActionTypes.FETCH_USER_POSTS_ERROR:
      return { ...state, postsLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const selectUser = (state: RootState) => state.userReducer.user;
export const selectUserLoading = (state: RootState) => state.userReducer.loading;
export const selectUserPosts = (state: RootState) => state.userReducer.userPosts;
export const selectUserPostsLoading = (state: RootState) => state.userReducer.postsLoading;
