import { FC } from 'react';

import { Accordion, Card, Image, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import avatar from 'assets/avatar.jpg';
import PostComment from 'components/PostComment';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import {
  fetchPostComments,
  selectPostComments,
  selectPostCommentsLoading,
} from 'store/slices/PostSlice';
import { Post } from 'types/post';
import { delay } from 'utils';

interface PostProps {
  post: Post;
}

const PostCard: FC<PostProps> = ({ post }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const comments = useAppSelector(selectPostComments(post.id));
  const commentsLoading = useAppSelector(selectPostCommentsLoading(post.id));
  const commentsArr = comments?.map((comment) => (
    <PostComment key={comment.id} body={comment.body} email={comment.email} />
  ));

  const onAvatarClick = () => navigate(`/user/${post.userId}`);

  const onEnter = async () => {
    if (!comments) {
      dispatch(fetchPostComments(post.id));
      await delay(500);
    }
  };

  return (
    <Card className="w-75">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Image
          src={avatar}
          roundedCircle
          width={50}
          onClick={() => onAvatarClick()}
          style={{ cursor: 'pointer' }}
        />
        <Link to={`/user/${post.userId}`}>Автор поста</Link>
        <Accordion>
          <Accordion.Item eventKey={post.id.toString()}>
            <Accordion.Header>Показать комментарии</Accordion.Header>
            <Accordion.Body onEnter={onEnter} className="d-flex flex-column gap-3">
              {commentsLoading ? <Spinner size="sm" /> : commentsArr}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
