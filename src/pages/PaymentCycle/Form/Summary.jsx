import React from 'react';

import Summary from 'components/widgets/Summary';

const sum = (a, b) => a + +b.value || 0;

const PaymentCycleSummary = ({ summary: { credits = [], debits = [] } }) => {
  const credit = credits.reduce(sum, 0);
  const debit = debits.reduce(sum, 0);

  return (
    <fieldset className="payment-cycle__form__summary">
      <legend>Resumo</legend>
      <Summary credit={credit} debit={debit} />
    </fieldset>
  );
};

export default PaymentCycleSummary;
