import React from 'react';
import { Field } from 'redux-form';

import FloatingLabelInput from 'components/forms/FloatingLabel/GeneralInput';
import FloatingLabelSelect from 'components/forms/FloatingLabel/Select';

import { required } from 'utils/validators';

const PaymentCycleInformations = ({ banks = [] }) => (
  <fieldset className="payment-cycle__form__informations">
    <legend>Informações</legend>
    <div className="row">
      <div className="col-12 col-md-4">
        <Field
          component={FloatingLabelSelect}
          id="inputPaymentCycleBank"
          name="bankingAccountId"
          normalize={value => Number(value)}
          label="Conta bancária"
          options={banks}
          valueSelector="id"
          labelSelector="bankName"
          validate={[required]}
        />
      </div>
      <div className="col-12 col-md-4">
        <Field
          component={FloatingLabelInput}
          id="inputPaymentCycleDescription"
          name="description"
          label="Descrição"
          validate={[required]}
        />
      </div>
      <div className="col-12 col-md-4">
        <Field
          component={FloatingLabelInput}
          id="inputPaymentCycleDate"
          name="date"
          type="date"
          label="Data"
          validate={[required]}
        />
      </div>
    </div>
  </fieldset>
);

export default PaymentCycleInformations;
