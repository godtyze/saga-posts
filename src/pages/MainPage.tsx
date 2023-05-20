import { FC, useEffect } from 'react';

import { Spinner } from 'react-bootstrap';

import Pagination from 'components/Pagination';
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
    <main className="d-flex flex-column justify-content-center flex-grow-1 align-items-center">
      <Pagination />
      {loading ? <Spinner /> : <PostList posts={posts} pagination={true} />}
    </main>
  );
};

export default MainPage;
