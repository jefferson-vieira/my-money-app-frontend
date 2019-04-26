import React from 'react';

const Card = ({
  account: { bankName, number, agency, digit, createdAt },
  removeAccount
}) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title" title={bankName}>
        {bankName}
      </h5>
      <p className="card-text">
        <span className="strong">Número:</span> {number}
      </p>
      <p className="card-text">
        <span className="strong">Agência:</span> {agency}
      </p>
      <p className="card-text">
        <span className="strong">Dígito:</span> {digit}
      </p>
      <div className="card-btn-group">
        <button
          title="Apagar conta"
          className="btn btn-outline-danger float-right"
          onClick={removeAccount}
        >
          Apagar
        </button>
      </div>
      <p className="card-text">
        <small className="text-muted">Adição: {createdAt}</small>
      </p>
    </div>
  </div>
);

export default Card;
