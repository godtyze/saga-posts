import { instance } from 'api';
import { Post, PostComment, PostRequestParams } from 'types/post';

export const fetchPostsFromApi = ({ page, limit }: PostRequestParams) =>
  instance.get<Post[]>('/posts', {
    params: {
      _limit: limit,
      _page: page,
    },
  });

export const fetchCommentFromApi = (postId: number) =>
  instance.get<PostComment[]>(`/posts/${postId}/comments`);
