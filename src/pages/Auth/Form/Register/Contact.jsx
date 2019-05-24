import React from 'react';
import { Field, FormSection } from 'redux-form';

import FloatingLabelInput from 'components/forms/FloatingLabel/GeneralInput';
import PostalCodeInput from 'components/forms/FloatingLabel/PostalCodeInput';

import {
  required,
  postalCode,
  name,
  number,
  state,
  tel,
  cel
} from 'utils/validators';

const Contact = ({ getAddress, change, touch }) => {
  const handleAddress = async () => {
    const { logradouro, bairro, localidade, uf } = (await getAddress()) || {};
    touch(
      'address.postalCode',
      'address.street',
      'address.number',
      'address.district',
      'address.city',
      'address.state'
    );
    change('address.street', logradouro || '');
    change('address.district', bairro || '');
    change('address.city', localidade || '');
    change('address.state', uf || '');
  };

  return (
    <fieldset>
      <legend>Contato</legend>
      <FormSection name="address">
        <div className="row">
          <div className="col-12 col-md-4">
            <Field
              component={PostalCodeInput}
              id="inputUserPostalCode"
              name="postalCode"
              type="text"
              autoComplete="postal-code"
              label="CEP"
              maxLength={9}
              onClick={handleAddress}
              validate={[required, postalCode]}
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
              normalize={value => value.toUpperCase()}
              validate={[required, state]}
            />
          </div>
        </div>
      </FormSection>
      <div className="row">
        <div className="col-12 col-md-6">
          <Field
            component={FloatingLabelInput}
            id="inputUserTelephone"
            name="telephone"
            type="tel"
            autoComplete="tel-national"
            label="DDD + Telefone (apenas números)"
            maxLength={10}
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
            maxLength={11}
            validate={[required, number, cel]}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default Contact;
