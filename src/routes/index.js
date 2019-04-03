import React from 'react';

import { Switch, Route } from 'react-router';
import { Router as BrowserRouter } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import history from './history';

import Auth from 'pages/Auth';
import NotFound from 'pages/NotFound';
import Main from 'components/templates/Main';

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path="/auth" component={Auth} />
      <PrivateRoute path="/account" component={Main} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
