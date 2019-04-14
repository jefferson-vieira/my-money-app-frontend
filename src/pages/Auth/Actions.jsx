import React from 'react';

import { showErrorToast } from 'utils/error';

export default ({ authType, changeAuthType, needsAccount, valid }) => (
  <div className="auth__actions">
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={e => {
        e.target.blur();
        changeAuthType();
      }}
      title={
        needsAccount
          ? 'Se já tiver conta, acesse ela clicando aqui!'
          : 'Se não tiver conta, crie uma clicando aqui!'
      }
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
      {authType}
    </button>
  </div>
);
