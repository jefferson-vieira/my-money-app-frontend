import React from 'react';

import ValueBox from 'components/widgets/ValueBox';

const Summary = ({ credit, debit }) => (
  <section className="summary">
    <ValueBox
      text="Crédito"
      value={credit}
      color="success"
      icon="dollar-sign"
    />
    <ValueBox
      text="Débito"
      value={debit}
      color="danger"
      icon="receipt"
    />
    <ValueBox
      text="Saldo"
      value={credit - debit}
      color="info"
      icon="credit-card"
    />
  </section>
);

export default Summary;
