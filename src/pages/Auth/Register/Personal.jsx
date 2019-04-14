import React from 'react';
import { Field } from 'redux-form';

import FloatingLabelInput from 'components/FloatingLabelInput';

import {
  required,
  name,
  beforeOrEqual,
  cpf,
  password,
  matchField
} from 'utils/validators';

const matchPassword = matchField('password');

export default () => (
  <fieldset>
    <legend>Pessoal</legend>
    <div className="row">
      <div className="col-12 col-md-6">
        <Field
          component={FloatingLabelInput}
          id="inputUserName"
          name="name"
          type="text"
          autoComplete="name"
          label="Nome"
          validate={[required, name]}
        />
      </div>
      <div className="col-12 col-md-6">
        <Field
          component={FloatingLabelInput}
          id="inputUserSurname"
          name="surname"
          type="text"
          autoComplete="family-name"
          label="Sobrenome"
          validate={[required, name]}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6">
        <Field
          component={FloatingLabelInput}
          id="inputUserBirthday"
          name="birthday"
          type="date"
          autoComplete="bday"
          label="Data de nascimento"
          validate={[required, beforeOrEqual]}
        />
      </div>
      <div className="col-12 col-md-6">
        <Field
          component={FloatingLabelInput}
          id="inputUserCpf"
          name="cpf"
          type="number"
          label="CPF (apenas números)"
          validate={[required, cpf]}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6">
        <Field
          component={FloatingLabelInput}
          className="mb-md-3"
          id="inputUserPassword"
          name="password"
          type="password"
          autoComplete="new-password"
          label="Senha"
          validate={[required, password]}
        />
      </div>
      <div className="col-12 col-md-6">
        <Field
          component={FloatingLabelInput}
          className="mb-3"
          id="inputUserConfirmPassword"
          name="confirmPassword"
          type="password"
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
