import { instance } from 'api';
import { Post } from 'types/post';

export const fetchPostsFromApi = (page = 1, limit = 10) =>
  instance.get<Post[]>('/posts', {
    params: {
      _limit: limit,
      _page: page,
    },
  });
