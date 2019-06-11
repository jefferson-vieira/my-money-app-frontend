import React, { lazy } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import LazyRoute from './LazyRoute';
import PrivateRoute from './PrivateRoute';

const Auth = lazy(() => import('pages/Auth'));
const Main = lazy(() => import('components/templates/Main'));
const NotFound = lazy(() => import('pages/NotFound'));

const Routes = () => (
  <BrowserRouter>
    <ScrollToTop>
      <LazyRoute>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/auth/signin" />} />
          <Route path="/auth" component={Auth} />
          <PrivateRoute path="/me" component={Main} />
          <Route component={NotFound} />
        </Switch>
      </LazyRoute>
    </ScrollToTop>
  </BrowserRouter>
);

export default Routes;
