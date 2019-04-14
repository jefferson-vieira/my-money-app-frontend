import React from 'react';
import { Field } from 'redux-form';

import FloatingLabelInput from 'components/FloatingLabelInput';

import { required, email, tel, cel, matchField } from 'utils/validators';

const matchEmail = matchField('email');

export default () => (
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
      validate={[required, email, matchEmail]}
    />
    <div className="row">
      <div className="col-12 col-md-6">
        <Field
          component={FloatingLabelInput}
          id="inputUserTelephone"
          name="telephone"
          type="tel"
          autoComplete="tel-national"
          label="DDD + Telefone (apenas números)"
          validate={[required, tel]}
        />
      </div>
      <div className="col-12 col-md-6">
        <Field
          component={FloatingLabelInput}
          id="inputUserCellphone"
          name="cellphone"
          type="tel"
          autoComplete="tel-national"
          label="DDD + Celular (apenas números)"
          validate={[required, cel]}
        />
      </div>
    </div>
  </fieldset>
);
