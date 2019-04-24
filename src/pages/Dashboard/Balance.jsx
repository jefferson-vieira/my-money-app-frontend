import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/ContentHeader';

import Card from './Card';

const Balance = ({ banks }) => (
  <>
    <Header
      primary="Balanço"
      secondary="Veja o resumo das suas contas bancárias"
    />
    {banks.length > 0 ? (
      <section className="dashboard__balance">
        {banks.map(bank => (
          <Card key={bank.id} bankingAccount={bank} />
        ))}
      </section>
    ) : (
      <div className="m-3">
        <p>
          Não há contas bancárias cadastradas! Adicione uma conta bancária em{' '}
          <Link to="/me/banks" title="Gerenciador de contas">
            Contas
          </Link>
          .
        </p>
      </div>
    )}
  </>
);

export default Balance;
