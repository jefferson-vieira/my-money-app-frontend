import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { money } from 'utils/formatter';

const Card = ({ bankingAccount = {}, summary = {} }) => {
  const credit = money(summary.credit);
  const debit = money(summary.debit);
  const balance = money(summary.credit - summary.debit);

  return (
    <div className="card">
      <div className="card-header" title={bankingAccount.bankName}>
        {bankingAccount.bankName}
        <br />
        {bankingAccount.agency} | {bankingAccount.number}-{bankingAccount.digit}
        <br />
        <small className="text-muted">{bankingAccount.createdAt}</small>
      </div>
      <div className="card-body">
        <p className="card-text" title={`Crédito: ${credit}`}>
          <FontAwesomeIcon icon="dollar-sign" /> $ {credit}
        </p>
        <p className="card-text" title={`Débito: ${debit}`}>
          <FontAwesomeIcon icon="receipt" /> $ {debit}
        </p>
        <hr />
        <p className="card-text" title={`Saldo: ${balance}`}>
          <FontAwesomeIcon icon="credit-card" /> $ {balance}
        </p>
      </div>
    </div>
  );
};

export default Card;
