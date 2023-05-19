import { FC } from 'react';

import { Outlet } from 'react-router-dom';

const BaseLayout: FC = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

export default BaseLayout;
