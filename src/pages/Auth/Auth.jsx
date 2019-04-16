import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as userActions } from 'store/ducks/user';
import { Actions as statusActions } from 'store/ducks/status';

import Logo from 'components/templates/Logo';

import AuthType from './AuthType';

import Register from './Register/Form';
import Login from './Login';

import { signin, signup } from 'utils/auth';
import { showErrorModal } from 'utils/error';
import Actions from './Actions';

class Auth extends Component {
  state = {
    authType: AuthType.SIGNUP
  };

  changeAuthType = () => {
    this.setState({
      authType:
        this.state.authType === AuthType.SIGNIN
          ? AuthType.SIGNUP
          : AuthType.SIGNIN
    });
  };

  needsAccount = () => {
    return this.state.authType === AuthType.SIGNUP;
  };

  onSubmit = async values => {
    console.log(values);

    // const { setLoading, setUser, history, redirect } = this.props;

    // try {
    //   setLoading(true);

    //   const user = this.needsAccount()
    //     ? await signup(values)
    //     : await signin(values);
    //   setUser(user);

    //   history.push(redirect);
    // } catch (error) {
    //   showErrorModal(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  render() {
    const { authType } = this.state;

    return (
      <section id="auth" className="auth">
        <div
          className={`auth__card auth__card--${
            this.needsAccount() ? 'register' : 'login'
          }`}
        >
          <div className="auth__logo">
            <Logo />
            <hr />
          </div>
          <div className="auth__form">
            <h2 className="auth__title">{authType}</h2>
            {this.needsAccount() ? (
              <Register onSubmit={this.onSubmit} />
            ) : (
              <Login onSubmit={this.onSubmit} />
            )}
            <Actions
              authType={authType}
              changeAuthType={this.changeAuthType}
              needsAccount={this.needsAccount()}
              valid={false}
            />
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  redirect: state.status.redirect
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...statusActions, ...userActions }, dispatch);

Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default Auth;
