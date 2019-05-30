import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import history from './history';

import ScrollToTop from './ScrollToTop';
import Lazy from './Lazy';
// import PrivateRoute from './PrivateRoute';

import { routesWithSubRoutes as routes } from './routes';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// const Auth = lazy(() => import('pages/Auth'));
// const Main = lazy(() => import('components/templates/Main'));
// const Dashboard = lazy(() => import('pages/Dashboard'));
// const NotFound = lazy(() => import('pages/NotFound'));

const Main = props => (
  <div>
    <h1>Olá</h1>
    {props.children}
  </div>
);

const NotFound = lazy(() => import('pages/NotFound'));

class Dashboard extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h1>Dash: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
}

const Routes = () => (
  <Router history={history}>
    <ScrollToTop>
      <Lazy>
        <Switch>
          {routes}

          {/* <Route path="/oi/1" component={() => <div><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><h1>Oi 1</h1><Link to="/oi/2">Aff</Link></div>} />
        <Route path="/oi/2" component={() => <div><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1><h1>Oi 2</h1>{console.log('aff') && window.scrollTo(0, 0)}</div>} /> */}

          {/*
        <Route
          path="/me"
          render={props => (
            <Main
              {...props}
              children={<Switch>[<Route path="/me/dashboard" component={Dashboard} />, <Route component={() => <Redirect to="/" />} />]</Switch>}
            />
          )}
        />


            <Route component={NotFound} /> */}
          {/* <Main> */}
          {/* <Route path="/me/dashboard" component={Dashboard} /> */}
          {/* </Main> */}
        </Switch>
      </Lazy>
    </ScrollToTop>
  </Router>
);

export default Routes;
