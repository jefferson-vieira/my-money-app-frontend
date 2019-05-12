import React from 'react';
import { Field, FieldArray } from 'redux-form';

import Table from 'components/Table';
import SimpleInput from 'components/forms/SimpleInput';

import PaymentCycleTransactionsActions from './Actions';

function renderCreditRows(fields) {

  // fields.length ?
  return fields.map((field, index) => (
      <tr key={index}>
        <td>
          <Field
            component={SimpleInput}
            name={`${field}.description`}
            placeholder="Descrição"
          />
        </td>
        <td>
          <Field
            component={SimpleInput}
            name={`${field}.value`}
            placeholder="Valor"
          />
        </td>
        <td>
          <Field
            component={SimpleInput}
            name={`${field}.date`}
            type="date"
            placeholder="Data"
          />
        </td>
        <PaymentCycleTransactionsActions fields={fields} index={index} />
      </tr>
    ))
  // )
  //  : (
  //   <tr>
  //     <td colSpan="4" className="text-center">
  //       Nenhum crédito foi cadastrado ainda!
  //     </td>
  //   </tr>
  // );
}

function renderBody({fields}) {
  return (
<>
    <button type="button" onClick={() => fields.push({})}>
    Add Member
  </button>
  <tbody>
    {renderCreditRows(fields)}
  </tbody>
  </>
  )
}

function renderDebitRows({ fields }) {
  const statusOpts = ['PAGO', 'PENDENTE', 'AGENDADO'];

  return fields.length ? (
    fields.map((field, index) => (
      <tr key={index}>
        <td>
          <Field
            component={SimpleInput}
            name={`${field}.description`}
            placeholder="Descrição"
          />
        </td>
        <td>
          <Field
            component={SimpleInput}
            name={`${field}.value`}
            placeholder="Valor"
          />
        </td>
        <td>
          <Field
            component={SimpleInput}
            name={`${field}.date`}
            type="date"
            placeholder="Data"
          />
        </td>
        <td>
          <Field
            component={SimpleInput}
            name={`${field}.status`}
            placeholder="Situação"
          />
        </td>
        <PaymentCycleTransactionsActions fields={fields} index={index} />
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center">
        Nenhum débito foi cadastrado ainda!
      </td>
    </tr>
  );
}

const PaymentCycleTransactions = () => (
  <div className="row">
    <div className="col-12">
      <fieldset className="payment-cycle__form__transactions">
        <legend>Créditos</legend>
        <Table
          thead={
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          }
          tbody={<FieldArray name="credits" component={renderBody} />}
        />
      </fieldset>
    </div>
    <div className="col-12">
      <fieldset className="payment-cycle__form__transactions">
        <legend>Débitos</legend>
        <Table
          thead={
            <tr>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Data</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          }
          tbody={<FieldArray name="debits" component={renderDebitRows} />}
        />
      </fieldset>
    </div>
  </div>
);

export default PaymentCycleTransactions;

/*




*/
