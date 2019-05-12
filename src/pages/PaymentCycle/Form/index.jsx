import React from 'react';
import { reduxForm } from 'redux-form';

import PaymentCycleInformations from './Informations';
import PaymentCycleSummary from './Summary';
import PaymentCycleTransactions from './Transactions';
import PaymentCycleActions from './Actions';

const PaymentCycleForm = ({ handleSubmit, onSubmit, valid }) => (
  <section className="payment-cycle__form">
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <PaymentCycleInformations />
      <hr />
      <PaymentCycleSummary />
      <hr />
      <PaymentCycleTransactions />
      <hr />
      <PaymentCycleActions valid={valid} />
    </form>
  </section>
);

export default reduxForm({
  form: 'paymentCycleForm'
})(PaymentCycleForm);
