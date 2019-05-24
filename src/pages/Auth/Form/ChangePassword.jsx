import '../Auth.scss';

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as statusActions } from 'store/ducks/status';

import PasswordRecovery from './PasswordRecovery';

import { showSuccessModal } from 'utils/success';
import { showErrorModal } from 'utils/error';

import { recoveryPassword } from 'services/auth';

class ChangePassword extends Component {
  handleSubmit = async values => {
    const {
      setLoading,
      match: {
        params: { token }
      },
      history
    } = this.props;

    try {
      setLoading(true);
      await recoveryPassword({ token, ...values });
      showSuccessModal('Senha alterada com sucesso!').then(() =>
        history.push('/auth')
      );
    } catch {
      showErrorModal();
    } finally {
      setLoading(false);
    }
  };

  render() {
    return (
      <section id="auth" className="auth">
        <div className="auth__card">
          <PasswordRecovery onSubmit={this.handleSubmit} />
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(statusActions, dispatch);

ChangePassword = connect(
  null,
  mapDispatchToProps
)(ChangePassword);

export default ChangePassword;
