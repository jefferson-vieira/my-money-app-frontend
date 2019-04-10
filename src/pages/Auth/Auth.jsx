import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as userActions } from 'store/ducks/user';
import { Actions as statusActions } from 'store/ducks/status';

import Logo from 'components/Logo';
import FloatingLabelInput from 'components/FloatingLabelInput';

import AuthType from './AuthType';

import { required, name, email, password, matchPassword } from 'utils/validators';
import { signin, signup } from 'utils/auth';
import { showErrorModal, showErrorToast } from 'utils/error';

class Auth extends Component {
  state = {
    authType: AuthType.SIGNIN
  };

  changeAuthType = () => {
    this.setState(prevState => ({
      authType:
        prevState.authType === AuthType.SIGNIN
          ? AuthType.SIGNUP
          : AuthType.SIGNIN
    }));
  };

  needsAccount = () => {
    return this.state.authType === AuthType.SIGNUP;
  };

  onSubmit = async values => {
    const { setLoading, setUser, history, redirect } = this.props;

    try {
      setLoading(true);

      const user = this.needsAccount()
        ? await signup(values)
        : await signin(values);
      setUser(user);

      history.push(redirect);
    } catch (error) {
      showErrorModal(error);
    } finally {
      setLoading(false);
    }
  };

  render() {
    const { handleSubmit, valid } = this.props;
    const { authType } = this.state;
    const needsAccount = this.needsAccount();

    return (
      <section id="auth" className="auth">
        <div className="auth__card">
          <div className="auth__logo">
            <Logo />
            <hr />
          </div>
          <h2 className="auth__title">{authType}</h2>
          <form
            onSubmit={handleSubmit(this.onSubmit)}
            noValidate
            autoComplete="off"
          >
            {needsAccount && (
              <Field
                component={FloatingLabelInput}
                id="inputUserName"
                name="name"
                type="text"
                autoComplete="name"
                label="Nome"
                validate={[required, name]}
              />
            )}
            <Field
              component={FloatingLabelInput}
              id="inputUserEmail"
              name="email"
              type="email"
              autoComplete="username email"
              label="E-mail"
              validate={[required, email]}
            />
            <Field
              component={FloatingLabelInput}
              id="inputUserPassword"
              name="password"
              type="password"
              autoComplete={needsAccount ? 'new-password' : 'current-password'}
              label="Senha"
              validate={[required, password]}
              validateMessage={
                needsAccount &&
                'Deve ter entre 8 e 16 caracteres e conter pelo menos uma letra, um número e um símbolo'
              }
            />
            {needsAccount && (
              <Field
                component={FloatingLabelInput}
                id="inputUserConfirmPassword"
                name="confirmPassword"
                type="password"
                label="Confirme a senha"
                validate={[required, password, matchPassword]}
              />
            )}
            <div className="auth__actions">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={e => {
                  e.target.blur();
                  this.changeAuthType();
                }}
                title={
                  needsAccount
                    ? 'Se já tiver conta, acesse ela clicando aqui!'
                    : 'Se não tiver conta, crie uma clicando aqui!'
                }
              >
                {needsAccount ? 'Entrar' : 'Criar conta'}
              </button>
              <button
                type="submit"
                onClick={() => {
                  if (!valid) showErrorToast(400);
                }}
                className="btn btn-primary"
                title="Efetuar acesso"
              >
                {authType}
              </button>
            </div>
          </form>
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

Auth = reduxForm({
  form: 'authForm'
})(Auth);

Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);

export default Auth;
