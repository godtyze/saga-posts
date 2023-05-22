import { FC, useEffect } from 'react';

import { Spinner } from 'react-bootstrap';

import Pagination from 'components/Pagination';
import PostList from 'components/PostList';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchPosts } from 'store/slices/PostSlice';

const MainPage: FC = () => {
  const { page, limit, loading, posts } = useAppSelector((state) => state.postReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ page, limit }));
  }, [dispatch, limit, page]);

  return (
    <main className="d-flex flex-column justify-content-center flex-grow-1 align-items-center">
      <Pagination />
      {loading ? <Spinner /> : <PostList posts={posts} />}
    </main>
  );
};

export default MainPage;
