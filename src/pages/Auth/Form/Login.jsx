import React from 'react';
import { Field } from 'redux-form';

import FloatingLabelInput from 'components/forms/FloatingLabel/GeneralInput';
import FloatingLabelPasswordInput from 'components/forms/FloatingLabel/PasswordInput';

import { required, email, password } from 'utils/validators';

const Login = ({ changePassword }) => (
  <>
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
      component={FloatingLabelPasswordInput}
      className="mb-3"
      id="inputUserPassword"
      name="password"
      autoComplete="new-password"
      label="Senha"
      validate={[required, password]}
    />
    <div className="auth__actions--login">
      Esqueceu a senha?
      <button
        type="button"
        className="btn btn-link p-0 ml-1"
        onClick={changePassword}
      >
        Clique aqui!
      </button>
    </div>
  </>
);

export default Login;
