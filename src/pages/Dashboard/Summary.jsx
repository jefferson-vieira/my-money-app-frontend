import React from 'react';

import Header from 'components/ContentHeader';
import ValueBox from 'components/widgets/ValueBox';

const Summary = ({ summary: { credit, debit } }) => (
  <>
    <Header
      primary="Resumo"
      secondary="Veja o resumo das suas movimentações financeiras"
    />
    <section className="dashboard__summary">
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
  </>
);

export default Summary;
