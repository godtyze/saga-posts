import { FC } from 'react';

import { Row } from 'react-bootstrap';

import PostCard from 'components/PostCard';
import { Post } from 'types/post';

interface PostListProps {
  posts: Post[];
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <Row className="gap-4 justify-content-center">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Row>
  );
};

export default PostList;
