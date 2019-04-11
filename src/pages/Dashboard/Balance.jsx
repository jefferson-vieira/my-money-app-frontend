import React from 'react';

import Header from 'components/ContentHeader';

import Card from './Card';

const Balance = ({ banks, banksSummaries }) => (
  <>
    <Header
      primary="Balanço"
      secondary="Veja o resumo das suas contas bancárias"
    />
    <section className="dashboard__balance">
      {banks.map((bank, index) => (
        <Card
          key={index}
          bankingAccount={bank}
          summary={banksSummaries[index]}
        />
      ))}
    </section>
  </>
);

export default Balance;
