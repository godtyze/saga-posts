import { FC, useEffect } from 'react';

import { Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import PostList from 'components/PostList';
import UserCard from 'components/UserCard';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectPosts, selectPostsLoading } from 'store/slices/PostSlice';
import { fetchUser, selectUser, selectUserLoading } from 'store/slices/UserSlice';

const UserPage: FC = () => {
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  const user = useAppSelector(selectUser);
  const loading = useAppSelector(selectUserLoading);
  const userPosts = useAppSelector(selectPosts);
  const postsLoading = useAppSelector(selectPostsLoading);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUser(+userId));
    }
  }, [dispatch, userId]);

  if (!user || loading) {
    return (
      <Row as="main" className="justify-content-center flex-grow-1 align-items-center">
        <Spinner />
      </Row>
    );
  }

  return (
    <main className="d-flex justify-content-center flex-column gap-3">
      <UserCard user={user} />
      <h5 className="align-self-center">Посты пользователя:</h5>
      {postsLoading ? <Spinner className="align-self-center" /> : <PostList posts={userPosts} />}
    </main>
  );
};

export default UserPage;
