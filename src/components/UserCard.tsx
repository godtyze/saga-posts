import { FC } from 'react';

import { Card } from 'react-bootstrap';

import { User } from 'types/user';

interface UserCardProps {
  user: User;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Card className="w-75 align-self-center">
      <Card.Header>Информация о пользователе</Card.Header>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <b>email: </b>
          {user.email}
        </Card.Text>
        <Card.Text>
          <b>номер телефона: </b>
          {user.phone}
        </Card.Text>
        <Card.Text>
          <b>вебсайт: </b>
          {user.website}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
