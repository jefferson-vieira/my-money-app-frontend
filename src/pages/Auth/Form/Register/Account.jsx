import React from 'react';
import { Field } from 'redux-form';

import FloatingLabelInput from 'components/forms/FloatingLabel/GeneralInput';
import FloatingLabelPasswordInput from 'components/forms/FloatingLabel/PasswordInput';

import { required, email, password, matchField } from 'utils/validators';

const matchEmail = matchField('email');
const matchPassword = matchField('password');

const Account = () => (
  <fieldset>
    <legend>Conta</legend>
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
      id="inputUserConfirmEmail"
      name="confirmEmail"
      type="email"
      label="Confirme o e-mail"
      validate={[required, email, matchEmail]}
    />
    <div className="row">
      <div className="col-12 col-md-6">
        <Field
          component={FloatingLabelPasswordInput}
          className="mb-md-3"
          id="inputUserPassword"
          name="password"
          autoComplete="new-password"
          label="Senha"
          validate={[required, password]}
        />
      </div>
      <div className="col-12 col-md-6">
        <Field
          component={FloatingLabelPasswordInput}
          className="mb-3"
          id="inputUserConfirmPassword"
          name="confirmPassword"
          label="Confirme a senha"
          validate={[required, password, matchPassword]}
        />
      </div>
      <div className="col-12">
        <small className="form-text text-muted text-center mb-4">
          A senha deve ter entre 8 e 16 caracteres e conter letras, números e
          símbolos
        </small>
      </div>
    </div>
  </fieldset>
);

export default Account;
