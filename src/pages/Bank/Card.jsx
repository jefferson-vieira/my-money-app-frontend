import React from 'react';

const Card = ({ account = {}, removeAccount }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title" title={account.bankName}>
        {account.bankName}
      </h5>
      <p className="card-text">
        <span className="strong">Número:</span> {account.number}
      </p>
      <p className="card-text">
        <span className="strong">Agência:</span> {account.agency}
      </p>
      <p className="card-text">
        <span className="strong">Dígito:</span> {account.digit}
      </p>
      <div className="card-btn-group">
        <button
          title="Apagar conta"
          className="btn btn-outline-danger"
          onClick={removeAccount}
        >
          Apagar
        </button>
      </div>
      <p className="card-text">
        <small className="text-muted">
          Conta adicionada em: {account.createdAt}
        </small>
      </p>
    </div>
  </div>
);

export default Card;
