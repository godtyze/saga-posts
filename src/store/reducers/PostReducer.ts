import { RootState } from 'store/index';
import { PostAction, PostActionTypes, PostState } from 'types/post';

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
  page: 1,
  limit: 5,
};

export const postReducer = (state = initialState, action: PostAction) => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return { ...state, loading: true };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PostActionTypes.SET_POST_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export const selectPage = (state: RootState) => state.postReducer.page;
export const selectLimit = (state: RootState) => state.postReducer.limit;
export const selectPosts = (state: RootState) => state.postReducer.posts;
export const selectPostsLoading = (state: RootState) => state.postReducer.loading;
