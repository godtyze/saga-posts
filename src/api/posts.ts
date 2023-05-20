import { instance } from 'api';
import { Post, PostCommentType, PostRequestParams } from 'types/post';

export const fetchPostsFromApi = ({ page, limit, userId }: PostRequestParams) =>
  instance.get<Post[]>('/posts', {
    params: {
      _limit: limit,
      _page: page,
      userId,
    },
  });

export const fetchCommentFromApi = (postId: number) =>
  instance.get<PostCommentType[]>(`/posts/${postId}/comments`);
