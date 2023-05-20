import { FC, useEffect } from 'react';

import { Row, Spinner } from 'react-bootstrap';

import PostList from 'components/PostList';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { fetchPosts } from 'store/actions/PostActions';
import { selectLimit, selectLoading, selectPage, selectPosts } from 'store/reducers/PostReducer';

const MainPage: FC = () => {
  const page = useAppSelector(selectPage);
  const limit = useAppSelector(selectLimit);
  const posts = useAppSelector(selectPosts);
  const loading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts({ page, limit }));
  }, [dispatch, limit, page]);

  return (
    <Row as="main" className="justify-content-center flex-grow-1 align-items-center">
      {loading ? <Spinner /> : <PostList posts={posts} />}
    </Row>
  );
};

export default MainPage;
