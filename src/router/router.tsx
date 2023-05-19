import { createBrowserRouter, Navigate } from 'react-router-dom';

import AboutMePage from '../pages/AboutMePage';
import UserPage from '../pages/UserPage';
import BaseLayout from 'components/BaseLayout';
import MainPage from 'pages/MainPage';
import NotFound from 'pages/NotFound';
import routes from 'router/routes';

export const routesConfig = [
  {
    path: routes.main,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: routes.about,
        element: <AboutMePage />,
      },
      {
        path: routes.userPage,
        element: <UserPage />,
      },
      {
        path: '*',
        element: <Navigate to={routes.notFound} />,
      },
      {
        path: routes.notFound,
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routesConfig, {
  basename: '/saga-posts/',
});

export default router;
