import { FC } from 'react';

import { Card } from 'react-bootstrap';

interface PostCommentProps {
  body: string;
  email: string;
}

const PostComment: FC<PostCommentProps> = ({ body, email }) => {
  return (
    <Card.Text className="border p-2">
      <h6>{email}</h6>
      {body}
    </Card.Text>
  );
};

export default PostComment;
