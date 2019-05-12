import React from 'react';

import IconButton from 'components/IconButton';

const PaymentCycleTransactionsActions = ({ fields, index }) => (
  <td className="payment-cycle__form__transactions__actions">
    <div>
      <IconButton
        className="btn btn-warning"
        icon="clone"
        color="#fff"
        title="Criar uma cópia"
        onClick={() => fields.insert(index + 1, fields.get(index))}
      />
      <IconButton
        className="btn btn-danger"
        icon="trash"
        title="Remover"
        onClick={() => fields.remove(index)}
      />
    </div>
  </td>
);

export default PaymentCycleTransactionsActions;
