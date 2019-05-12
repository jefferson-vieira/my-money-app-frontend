import React from 'react';
import { Link } from 'react-router-dom';

import IconButton from 'components/IconButton';
import Pagination from 'components/widgets/Pagination';

const PaymentCycleList = ({
  match,
  paymentCycles: {
    content: paymentCycles = [],
    totalPages,
    number,
    first,
    last
  },
  getPaymentCycles,
  editPaymentCycle,
  removePaymentCycle
}) => (
  <>
    <div className="my-3">
      <Link
        to={match.url + '/create'}
        className="btn btn-primary float-right"
        title="Adicionar novo ciclo de pagamento"
      >
        Adicionar
      </Link>
    </div>
    <div className="payment-cycle__list table-responsive">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Conta</th>
            <th scope="col">Descrição</th>
            <th scope="col">Data</th>
            <th scope="col" className="payment-cycle__list__actions">
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
                <td className="payment-cycle__list__actions">
                  <IconButton
                    title="Editar"
                    className="btn btn-warning"
                    icon="edit"
                    color="#fff"
                    onClick={() => editPaymentCycle(paymentCycle)}
                  />
                  <IconButton
                    title="Remover"
                    className="btn btn-danger"
                    icon="trash"
                    onClick={() => removePaymentCycle(paymentCycle)}
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
    <Pagination
      show={paymentCycles.length}
      label="Ciclos de pagamentos cadastrados"
      pages={totalPages}
      active={number + 1}
      first={first}
      last={last}
      onPageChange={getPaymentCycles}
    />
  </>
);

export default PaymentCycleList;
