import React from 'react';

import List from './List';
import Credit from './Credit';
import Debit from './Debit';

const PaymentCycleTransactions = () => (
  <div className="row">
    <List
      legend="Créditos"
      header={() => (
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Data</th>
          <th>Ações</th>
        </tr>
      )}
      body={Credit}
      field="credits"
    />
    <List
      legend="Débitos"
      header={() => (
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Data</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      )}
      body={Debit}
      field="debits"
    />
  </div>
);

export default PaymentCycleTransactions;
