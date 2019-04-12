import React from 'react';

import Header from 'components/ContentHeader';

import Card from './Card';

const Balance = ({ banks }) => (
  <>
    <Header
      primary="Balanço"
      secondary="Veja o resumo das suas contas bancárias"
    />
    <section className="dashboard__balance">
      {banks.map(bank => (
        <Card key={bank.id} bankingAccount={bank} />
      ))}
    </section>
  </>
);

export default Balance;
