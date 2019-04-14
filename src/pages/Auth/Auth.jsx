import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as userActions } from 'store/ducks/user';
import { Actions as statusActions } from 'store/ducks/status';

import Logo from 'components/Logo';

import AuthType from './AuthType';

// import Form from './Form';
import NewForm from './Register/Form';

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
        <div className="auth__card">
          <div className="auth__logo">
            <Logo />
            <hr />
          </div>
          <h2 className="auth__title">{authType}</h2>
          {/* <Form
            authType={authType}
            changeAuthType={this.changeAuthType}
            needsAccount={this.needsAccount()}
            onSubmit={this.onSubmit}
          /> */}

          <NewForm onSubmit={this.onSubmit} />
          <Actions
            authType={authType}
            changeAuthType={this.changeAuthType}
            needsAccount={this.needsAccount()}
            valid={false}
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
