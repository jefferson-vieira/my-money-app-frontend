import React from 'react';
import { Field } from 'redux-form';

import FloatingLabelInput from 'components/forms/FloatingLabel/Input';

import { required, name, beforeOrEqual, cpf } from 'utils/validators';

const Personal = () => (
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
          type="text"
          label="CPF (apenas números)"
          validate={[required, cpf]}
        />
      </div>
    </div>
  </fieldset>
);

export default Personal;
