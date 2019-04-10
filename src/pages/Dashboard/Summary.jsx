import React from 'react';

import ValueBox from 'components/widgets/ValueBox';

const Summary = () => (
  <section className="dashboard__summary">
    <ValueBox text="Crédito" value="9999999999999999" color="success" icon="dollar-sign" />
    <ValueBox text="Débito" value="99999999" color="danger" icon="receipt" />
    <ValueBox text="Saldo" value="99999999" color="info" icon="credit-card" />
  </section>
);

export default Summary;
