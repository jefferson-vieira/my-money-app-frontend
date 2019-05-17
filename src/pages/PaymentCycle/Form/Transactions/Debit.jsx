import React from 'react';
import { Field, FieldArray } from 'redux-form';

import FloatingLabelInput from 'components/forms/FloatingLabel/GeneralInput';
import FloatingLabelSelect from 'components/forms/FloatingLabel/Select';

import TransactionsActions from './Actions';

const renderRows = ({ fields }) => {
  const statusOpts = ['PAGO', 'PENDENTE', 'AGENDADO'];

  return fields.length ? (
    fields.map((field, index) => (
      <tr key={index}>
        <td>
          <Field
            component={FloatingLabelInput}
            name={`${field}.description`}
            placeholder="Descrição"
          />
        </td>
        <td>
          <Field
            component={FloatingLabelInput}
            name={`${field}.value`}
            placeholder="Valor"
          />
        </td>
        <td>
          <Field
            component={FloatingLabelInput}
            name={`${field}.date`}
            type="date"
            placeholder="Data"
          />
        </td>
        <td>
          <Field
            component={FloatingLabelSelect}
            name={`${field}.status`}
            placeholder="Situação"
            options={statusOpts}
          />
        </td>
        <TransactionsActions fields={fields} index={index} />
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" className="text-center" style={{ height: '63px' }}>
        Nenhum débito foi cadastrado ainda!
      </td>
    </tr>
  );
};

const TransactionsCredit = () => (
  <FieldArray name="debits" component={renderRows} />
);

export default TransactionsCredit;
