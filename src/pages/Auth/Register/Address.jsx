import React from 'react';
import { Field } from 'redux-form';

import FloatingLabelInput from 'components/FloatingLabelInput';

import { required, cep, name, number, letters } from 'utils/validators';

export default () => (
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
          validate={[required, cep]}
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
          validate={[required, name]}
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
          validate={[required, number]}
        />
      </div>
      <div className="col-12 col-md-4">
        <Field
          component={FloatingLabelInput}
          id="inputUserDistrict"
          name="district"
          type="text"
          autoComplete="address-level3"
          label="Bairro"
          validate={[required, name]}
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
          validate={[required, name]}
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
          maxlength="2"
          validate={[required, letters]}
        />
      </div>
    </div>
  </fieldset>
);
