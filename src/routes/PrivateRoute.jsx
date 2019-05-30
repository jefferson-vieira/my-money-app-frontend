import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as statusActions } from 'store/ducks/status';

class PrivateRoute extends Component {
  componentDidMount() {
    const { isAuthenticated, setRedirect, location } = this.props;

    if (!isAuthenticated) setRedirect(location.state.from);
  }

  render() {
    const { isAuthenticated, component: Component, ...others } = this.props;

    return (
      <Route
        {...others}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.status.isAuthenticated
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setRedirect: statusActions.setRedirect }, dispatch);

PrivateRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);

export default PrivateRoute;
