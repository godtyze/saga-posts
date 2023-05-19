import { PostAction, PostActionTypes, PostState } from 'types/post';

const initialState: PostState = {
  posts: [],
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action: PostAction) => {
  switch (action.type) {
    case PostActionTypes.FETCH_POSTS:
      return { loading: true, error: null, users: [] };
    case PostActionTypes.FETCH_POSTS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case PostActionTypes.FETCH_POSTS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
};
