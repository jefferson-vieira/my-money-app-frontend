import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { showErrorToast } from 'utils/error';

const PaymentCycleActions = ({ match, valid }) => {
  const pathname = match.url
    .split('/')
    .slice(0, -1)
    .join('/');

  return (
    <div className="payment-cycle__form__actions">
      <button
        type="submit"
        className="btn btn-primary"
        title="Salvar"
        onClick={() => {
          if (!valid) showErrorToast(400);
        }}
      >
        Salvar
      </button>
      <Link to={pathname} className="btn btn-danger" title="Cancelar">
        Cancelar
      </Link>
    </div>
  );
};

export default withRouter(PaymentCycleActions);
