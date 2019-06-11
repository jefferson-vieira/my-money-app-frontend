import React, { lazy } from 'react';
import { Route, Redirect } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

const Auth = lazy(() => import('pages/Auth'));
const Main = lazy(() => import('components/templates/Main'));
const Dashboard = lazy(() => import('pages/Dashboard'));
const Bank = lazy(() => import('pages/Bank'));
const PaymentCycle = lazy(() => import('pages/PaymentCycle'));
const NotFound = lazy(() => import('pages/NotFound'));

const routes = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/auth/signin" />
  },
  {
    path: '/auth',
    component: Auth,
    routes: [
      {
        exact: true,
        path: '/signin',
        component: () => <Redirect to="/auth/signin" />
      },
      {
        exact: true,
        path: '/signup',
        component: () => <Redirect to="/auth/signin" />
      },
    ]
  },
  {
    auth: true,
    path: '/me',
    component: Main,
    routes: [
      {
        exact: true,
        path: '/',
        component: () => <Redirect to="/me/dashboard" />
      },
      {
        path: '/dashboard',
        component: Dashboard
      },
      {
        path: '/banks',
        component: Bank
      },
      {
        path: '/payment-cycles',
        component: PaymentCycle
      }
    ]
  },
  {
    component: NotFound
  }
];

const RouteWithSubRoutes = (
  { component: Component, auth, routes = [], ...route },
  index
) => {
  const props = {
    ...route,
    key: index,
    render: props => (
      <Component {...props}>
        {routes.length &&
          routes.map(props =>
            RouteWithSubRoutes({
              ...props,
              path: route.path + props.path,
              auth: route.auth || props.auth
            })
          )}
      </Component>
    )
  };

  return auth ? <Route {...props} /> : <Route {...props} />;
};

export default routes.map(RouteWithSubRoutes);
