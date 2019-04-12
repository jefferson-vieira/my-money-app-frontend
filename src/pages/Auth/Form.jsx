import React from 'react';
import { reduxForm, Field } from 'redux-form';

import FloatingLabelInput from 'components/FloatingLabelInput';

import {
  required,
  name,
  email,
  password,
  matchPassword
} from 'utils/validators';

import { showErrorToast } from 'utils/error';

const Form = ({
  authType,
  changeAuthType,
  needsAccount,
  handleSubmit,
  onSubmit,
  valid
}) => (
  <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
        'Deve ter entre 8 e 16 caracteres e conter letras, números e símbolos'
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
          changeAuthType();
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
);

export default reduxForm({
  form: 'authForm'
})(Form);
