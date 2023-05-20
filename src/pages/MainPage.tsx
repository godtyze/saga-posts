import { FC, useEffect } from 'react';

import { Spinner } from 'react-bootstrap';

import PostList from 'components/PostList';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchPosts } from 'store/actions/PostActions';
import {
  selectLimit,
  selectPostsLoading,
  selectPage,
  selectPosts,
} from 'store/reducers/PostReducer';

const MainPage: FC = () => {
  const page = useAppSelector(selectPage);
  const limit = useAppSelector(selectLimit);
  const posts = useAppSelector(selectPosts);
  const loading = useAppSelector(selectPostsLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ page, limit }));
  }, [dispatch, limit, page]);

  return (
    <main className="d-flex justify-content-center flex-grow-1 align-items-center">
      {loading ? <Spinner /> : <PostList posts={posts} pagination={true} />}
    </main>
  );
};

export default MainPage;
