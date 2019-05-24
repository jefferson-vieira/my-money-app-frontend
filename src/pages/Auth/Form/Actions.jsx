import React from 'react';

import { showErrorToast } from 'utils/error';

const Actions = ({ needsAccount, toggleAuthType, valid }) => (
  <div className="auth__actions">
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={e => {
        e.target.blur();
        toggleAuthType();
      }}
      title={
        needsAccount
          ? 'Se já tiver conta, acesse ela clicando aqui!'
          : 'Se não tiver conta, crie uma clicando aqui!'
      }
      tabIndex="-1"
    >
      {needsAccount ? 'Entrar' : 'Criar conta'}
    </button>
    <button
      type="submit"
      onClick={() => {
        if (!valid) showErrorToast(400);
      }}
      className="btn btn-primary"
      title="Efetuar acesso"
    >
      {needsAccount ? 'Criar conta' : 'Entrar'}
    </button>
  </div>
);

export default Actions;
