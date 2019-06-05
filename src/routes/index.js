import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import LazyRoute from './LazyRoute';

import history from './history';
import routes from './routes';

const Routes = () => (
  <Router history={history}>
    <ScrollToTop>
      <LazyRoute>
        <Switch>{routes}</Switch>
      </LazyRoute>
    </ScrollToTop>
  </Router>
);

export default Routes;
