import React from 'react';
import { Field } from 'redux-form';

import FloatingLabelInput from 'components/forms/FloatingLabel/GeneralInput';

import {
  required,
  postalCode,
  name,
  number,
  letters,
  tel,
  cel
} from 'utils/validators';

const Contact = ({ getAddress, change, touch }) => {
  const handleAddress = async () => {
    const { logradouro, bairro, localidade, uf } = (await getAddress()) || {};
    touch('street', 'district', 'city', 'state');
    change('street', logradouro || '');
    change('district', bairro || '');
    change('city', localidade || '');
    change('state', uf || '');
  };

  return (
    <fieldset>
      <legend>Contato</legend>
      <div className="row">
        <div className="col-12 col-md-4">
          <Field
            component={FloatingLabelInput}
            id="inputUserPostalCode"
            name="postalCode"
            type="text"
            autoComplete="postal-code"
            label="CEP"
            validate={[required, postalCode]}
            onBlur={handleAddress}
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
            maxLength="2"
            validate={[required, letters]}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Field
            component={FloatingLabelInput}
            id="inputUserTelephone"
            name="telephone"
            type="tel"
            autoComplete="tel-national"
            label="DDD + Telefone (apenas números)"
            validate={[required, number, tel]}
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
            validate={[required, number, cel]}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default Contact;
