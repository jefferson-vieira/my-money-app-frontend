import React from 'react';

import IconButton from 'components/IconButton';

const PaymentCycleList = ({ paymentCycles, edit, remove }) => (
  <div className="table-responsive">
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Conta</th>
          <th scope="col">Descrição</th>
          <th scope="col">Data</th>
          <th scope="col" className="payment-cycle__actions">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        {paymentCycles.length ? (
          paymentCycles.map(paymentCycle => (
            <tr key={paymentCycle.id}>
              <td>{paymentCycle.bankingAccount.bankName}</td>
              <td>{paymentCycle.description}</td>
              <td>{paymentCycle.date}</td>
              <td className="payment-cycle__actions">
                <IconButton
                  title="Editar"
                  className="btn btn-warning"
                  icon="edit"
                  color="#fff"
                  onClick={() => edit(paymentCycle)}
                />
                <IconButton
                  title="Remover"
                  className="btn btn-danger"
                  icon="trash"
                  onClick={() => remove(paymentCycle)}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="text-center">
              Nenhum ciclo de pagamento foi cadastrado ainda!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default PaymentCycleList;
