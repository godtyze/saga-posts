import { FC } from 'react';

import { Row } from 'react-bootstrap';

import Pagination from 'components/Pagination';
import PostCard from 'components/PostCard';
import { Post } from 'types/post';

interface PostListProps {
  posts: Post[];
  pagination?: boolean;
}

const PostList: FC<PostListProps> = ({ posts, pagination }) => {
  return (
    <Row className="gap-4 justify-content-center">
      {pagination && <Pagination />}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Row>
  );
};

export default PostList;
