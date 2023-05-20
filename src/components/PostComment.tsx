import { FC } from 'react';

interface PostCommentProps {
  body: string;
  email: string;
}

const PostComment: FC<PostCommentProps> = ({ body, email }) => {
  return (
    <div className="border p-2">
      <p className="fw-bold">{email}</p>
      {body}
    </div>
  );
};

export default PostComment;
