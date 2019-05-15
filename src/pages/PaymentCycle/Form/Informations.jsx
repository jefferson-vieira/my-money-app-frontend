import React from 'react';
import { Field } from 'redux-form';

import FloatingLabelInput from 'components/forms/FloatingLabel/GeneralInput';
import Select from 'components/forms/FloatingLabel/Select';

import { required } from 'utils/validators';

const PaymentCycleInformations = ({ banks }) => (
  <fieldset className="payment-cycle__form__informations">
    <legend>Informações</legend>
    <div className="row">
      <div className="col-12 col-md-4">
        {/* <Field
          component={Select}
          id="inputPaymentCycleBank"
          name="bankingAccountId"
          label="Conta bancária"
          options={banks}
          validate={[required]}
        /> */}
      </div>
      <div className="col-12 col-md-4">
        {/* <Field
          component={FloatingLabelInput}
          id="inputPaymentCycleDescription"
          name="description"
          label="Descrição"
          validate={[required]}
        /> */}
      </div>
      <div className="col-12 col-md-4">
        {/* <Field
          component={FloatingLabelInput}
          id="inputPaymentCycleDate"
          name="date"
          type="date"
          label="Data"
          validate={[required]}
        /> */}
      </div>
    </div>
  </fieldset>
);

export default PaymentCycleInformations;
