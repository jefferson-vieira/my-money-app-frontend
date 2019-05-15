import React from 'react';

import Summary from 'components/widgets/Summary';

const PaymentCycleSummary = () => (
  <fieldset className="payment-cycle__form__summary">
    <legend>Resumo</legend>
    <Summary credit={1000000} debit={1515151} />
  </fieldset>
);

export default PaymentCycleSummary;
