import React from 'react';

import BackButton from 'components/BackButton';

import { showErrorToast } from 'utils/error';

const PaymentCycleActions = ({ match, valid }) => {
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
      <BackButton
        className="btn-danger"
        label="Cancelar"
        title="Descartar alterações e voltar"
      />
    </div>
  );
};

export default PaymentCycleActions;
