import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { money } from 'utils/formatter';

const Card = ({
  bankingAccount: { bankName, agency, number, digit, createdAt, summary = {} }
}) => {
  const credit = money(summary.credit);
  const debit = money(summary.debit);
  const balance = money(summary.credit - summary.debit);

  return (
    <div className="card">
      <div className="card-header" title={bankName}>
        {bankName}
        <br />
        {agency} | {number}-{digit}
        <br />
        <small className="text-muted">{createdAt}</small>
      </div>
      <div className="card-body">
        <p className="card-text" title={`Crédito da conta: ${credit}`}>
          <FontAwesomeIcon icon="dollar-sign" /> $ {credit}
        </p>
        <p className="card-text" title={`Débito da conta: ${debit}`}>
          <FontAwesomeIcon icon="receipt" /> $ {debit}
        </p>
        <hr />
        <p className="card-text" title={`Saldo da conta: ${balance}`}>
          <FontAwesomeIcon icon="credit-card" /> $ {balance}
        </p>
      </div>
    </div>
  );
};

export default Card;
