import React from 'react';

import ValueBox from 'components/widgets/ValueBox';

const PaymentCycleSummary = () => (
  <fieldset className="payment-cycle__form__summary">
    <legend>Resumo</legend>
    <div>
      <ValueBox text="Crédito" value={100000} color="success" icon="dollar-sign" />
      <ValueBox text="Débito" value={200} color="danger" icon="receipt" />
      <ValueBox
        text="Saldo"
        value={100 - 200}
        color="info"
        icon="credit-card"
      />
    </div>
  </fieldset>
);

export default PaymentCycleSummary;
