import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as statusActions } from 'store/ducks/status';
import { Actions as bankActions } from 'store/ducks/bank';

const Auth = lazy(() => import('pages/Auth'));

const Main = lazy(() => import('components/templates/Main'));
// const Dashboard = lazy(() => import('pages/Dashboard'));
const Bank = lazy(() => import('pages/Bank'));
const PaymentCycle = lazy(() => import('pages/PaymentCycle'));

class Dashboard extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <h1>Dash: {this.state.count}</h1>
        <Link to="/me/banks">oi</Link>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            this.props.setLoading(true);
            this.props.setLoading(false);
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...statusActions }, dispatch);

Dashboard = connect(
  null,
  mapDispatchToProps
)(Dashboard);

const NotFound = lazy(() => import('pages/NotFound'));

const routes = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/login" />
  },
  {
    path: '/login',
    component: Auth
  },
  {
    auth: true,
    path: '/me',
    component: Main,
    routes: [
      {
        path: '/dashboard',
        component: Dashboard
      },
      {
        path: '/banks',
        component: () => (
          <div>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
            <h2>oi</h2>
          </div>
        )
      },
      {
        path: '/payment-cycles',
        component: PaymentCycle
      }
    ]
  },
  {
    path: '/',
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
        <Switch>
          {routes.map(props =>
            RouteWithSubRoutes({
              ...props,
              path: route.path + props.path,
              auth: route.auth || props.auth
            })
          )}
        </Switch>
      </Component>
    )
  };

  return auth ? <Route {...props} /> : <Route {...props} />;
};

export default routes.map(RouteWithSubRoutes);

export function show() {
  console.log(routes);
}
