import React, { Component } from 'react';
import classnames from 'classnames';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as userActions } from 'store/ducks/user';
import { Actions as statusActions } from 'store/ducks/status';

import Logo from './Logo';
import Form from './Form';

import AuthType from './AuthType';

import Modal from 'configs/swal';
import { login, register } from 'utils/auth';
import { changePassword } from 'services/auth';
import { showSuccessModal } from 'utils/success';
import { showErrorModal } from 'utils/error';

class Auth extends Component {
  state = {
    authType: AuthType.LOGIN
  };

  toggleAuthType = () => {
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

  changePassword = async () => {
    const { value: email } = await Modal.fire({
      type: 'info',
      title: 'Recuperação de conta',
      text: `Digite o e-mail vinculado a sua conta e enviaremos uma confirmação para que você possa alterar a sua senha`,
      input: 'email',
      inputPlaceholder: 'E-mail da conta',
      validationMessage: 'E-mail inválido!',
      confirmButtonText: 'Enviar',
      showCancelButton: true
    });

    if (email) {
      const { setLoading } = this.props;

      try {
        setLoading(true);
        await changePassword(email);
        showSuccessModal(`Um e-mail de confirmação foi enviado para: ${email}`);
      } catch (error) {
        showErrorModal(error);
      } finally {
        setLoading(false);
      }
    }
  };

  handleSubmit = async values => {
    const { setLoading, setUser, history, redirect } = this.props;

    try {
      setLoading(true);
      if (this.needsAccount()) {
        await register(values);
        showSuccessModal(
          `Um e-mail de ativação de conta foi enviado para: ${
            values.email
          }. Valide sua conta antes de prosseguir.`
        );
        this.toggleAuthType();
      } else {
        const user = await login(values);
        setUser(user);
        history.push(redirect);
      }
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
        <div
          className={classnames(
            'auth__card',
            `auth__card--${needsAccount ? 'register' : 'login'}`
          )}
        >
          <Logo />
          <Form
            authType={authType}
            needsAccount={needsAccount}
            toggleAuthType={this.toggleAuthType}
            changePassword={this.changePassword}
            onSubmit={this.handleSubmit}
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
