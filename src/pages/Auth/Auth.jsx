import React, { Component } from 'react';
import classnames from 'classnames'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as userActions } from 'store/ducks/user';
import { Actions as statusActions } from 'store/ducks/status';

import Logo from './Logo';
import Form from './Form';

import AuthType from './AuthType';

import { login, register } from 'utils/auth';
import { showErrorModal } from 'utils/error';

class Auth extends Component {
  state = {
    authType: AuthType.LOGIN
  };

  changeAuthType = () => {
    this.setState({
      authType:
        this.state.authType === AuthType.LOGIN
          ? AuthType.REGISTER
          : AuthType.LOGIN
    });
  };

  needsAccount = () => {
    return this.state.authType === AuthType.REGISTER;
  };

  onSubmit = async values => {
    const { setLoading, setUser, history, redirect } = this.props;

    try {
      setLoading(true);

      const user = this.needsAccount()
        ? await register(values)
        : await login(values);
      setUser(user);

      history.push(redirect);
    } catch (error) {
      showErrorModal(error);
    } finally {
      setLoading(false);
    }
  };

  render() {
    const { authType } = this.state;
    const needsAccount = this.needsAccount();

    return (
      <section id="auth" className="auth">
        <div className={classnames('auth__card', `auth__card--${needsAccount ? 'register':'login'}`)}>
          <Logo />
          <Form
            authType={authType}
            needsAccount={needsAccount}
            changeAuthType={this.changeAuthType}
            onSubmit={this.onSubmit}
          />
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
