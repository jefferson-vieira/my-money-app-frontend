import React from 'react';
import { reduxForm, Field } from 'redux-form';

import FloatingLabelInput from 'components/forms/FloatingLabelInput';

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
            validate={[required]}
          />
        </div>
        <div className="col-12 col-md-6">
          <Field
            component={FloatingLabelInput}
            id="inputUserCpf"
            name="cpf"
            type="number"
            label="CPF (apenas números)"
            validate={[required]}
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
            autoComplete={needsAccount ? 'new-password' : 'current-password'}
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

    <fieldset>
      <legend>Contato</legend>
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
        validate={[required, email]}
      />
      <div className="row">
        <div className="col-12 col-md-6">
          <Field
            component={FloatingLabelInput}
            id="inputUserTelephone"
            name="telephone"
            type="tel"
            autoComplete="tel-national"
            label="Telefone"
            validate={[required]}
          />
        </div>
        <div className="col-12 col-md-6">
          <Field
            component={FloatingLabelInput}
            id="inputUserCellphone"
            name="cellphone"
            type="tel"
            autoComplete="tel-national"
            label="Celular"
            validate={[required]}
          />
        </div>
      </div>
    </fieldset>

    <fieldset>
      <legend>Endereço</legend>
      <div className="row">
        <div className="col-12 col-md-4">
          <Field
            component={FloatingLabelInput}
            id="inputUserPostalCode"
            name="postalCode"
            type="text"
            autoComplete="postal-code"
            label="CEP"
            validate={[required]}
          />
        </div>
        <div className="col-12 col-md-8">
          <Field
            component={FloatingLabelInput}
            id="inputUserStreet"
            name="street"
            type="text"
            autoComplete="address-line1"
            label="Logradouro"
            validate={[required]}
          />
        </div>
        <div className="col-12 col-md-2">
          <Field
            component={FloatingLabelInput}
            id="inputUserNumber"
            name="number"
            type="text"
            autoComplete="address-line2"
            label="Número"
            validate={[required]}
          />
        </div>
        <div className="col-12 col-md-4">
          <Field
            component={FloatingLabelInput}
            id="inputUserNeighborhood"
            name="neighborhood"
            type="text"
            autoComplete="address-level3"
            label="Bairro"
            validate={[required]}
          />
        </div>
        <div className="col-12 col-md-4">
          <Field
            component={FloatingLabelInput}
            id="inputUserCity"
            name="city"
            type="text"
            autoComplete="address-level2"
            label="Cidade"
            validate={[required]}
          />
        </div>
        <div className="col-12 col-md-2">
          <Field
            component={FloatingLabelInput}
            id="inputUserState"
            name="state"
            type="text"
            autoComplete="address-level1"
            label="Estado"
            validate={[required]}
          />
        </div>
      </div>
    </fieldset>
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
