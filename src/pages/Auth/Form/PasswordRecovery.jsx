import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import FloatingLabelPasswordInput from 'components/forms/FloatingLabel/PasswordInput';

import { required, password, matchField } from 'utils/validators';

const matchPassword = matchField('password');

class PasswordRecovery extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;

    return (
      <div className="auth__form--password-recovery">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2 className="auth__title">Troca de senha</h2>
          <Field
            component={FloatingLabelPasswordInput}
            id="inputNewPassword"
            name="password"
            autoComplete="new-password"
            label="Nova senha"
            validate={[required, password]}
          />
          <Field
            component={FloatingLabelPasswordInput}
            id="inputConfirmNewPassword"
            name="confirmPassword"
            label="Confirme a nova senha"
            validate={[required, password, matchPassword]}
          />
          <small className="form-text text-muted text-center mb-4">
            A senha deve ter entre 8 e 16 caracteres e conter letras, números e
            símbolos
          </small>
        </form>
      </div>
    );
  }
}

PasswordRecovery = reduxForm({
  form: 'passwordRecoveryForm',
  destroyOnUnmount: true
})(PasswordRecovery);

export default PasswordRecovery;
