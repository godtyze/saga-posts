import { FC } from 'react';

import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Header from 'components/Header';

const BaseLayout: FC = () => {
  return (
    <Container className="app">
      <Header />
      <Outlet />
    </Container>
  );
};

export default BaseLayout;
