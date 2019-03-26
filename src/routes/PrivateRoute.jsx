import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as statusActions } from 'store/ducks/status';

class PrivateRoute extends Component {
  componentDidMount() {
    const { user, location, setRedirect } = this.props;

    if (!user) setRedirect(location.pathname);
  }

  render() {
    const { component: Component, user, ...others } = this.props;

    return (
      <Route
        {...others}
        render={props =>
          user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/auth',
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
  user: state.user.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(statusActions, dispatch);

PrivateRoute = connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);

export default PrivateRoute;
