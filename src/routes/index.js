import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Router as BrowserRouter } from 'react-router-dom';

import history from './history';
import Lazy from './Lazy';
import PrivateRoute from './PrivateRoute';

const Auth = lazy(() => import('pages/Auth'));
const Active = lazy(() => import('pages/Auth/Form/ActiveAccount'));
const ChangePassword = lazy(() => import('pages/Auth/Form/ChangePassword'));
const Main = lazy(() => import('components/templates/Main'));
const NotFound = lazy(() => import('pages/NotFound'));

const Router = () => (
  <BrowserRouter history={history}>
    <Lazy>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/auth" />} />
        <Route exact path="/auth" component={Auth} />
        <Route
          exact
          path="/auth/registration-confirm/:token"
          component={Active}
        />
        <Route
          exact
          path="/auth/change-password/:token"
          component={ChangePassword}
        />
        <Route path="/me" component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Lazy>
  </BrowserRouter>
);

export default Router;
