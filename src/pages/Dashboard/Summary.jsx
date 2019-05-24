import React from 'react';

import Header from 'components/ContentHeader';
import Summary from 'components/widgets/Summary';

const DashboardSummary = ({ summary: { credit, debit } }) => (
  <>
    <Header
      primary="Resumo"
      secondary="Veja o resumo total das suas movimentações financeiras"
    />
    <section className="dashboard__summary">
      <Summary credit={credit} debit={debit} className="mb-3" />
    </section>
  </>
);

export default DashboardSummary;
