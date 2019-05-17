import React from 'react';
import { Field, FieldArray } from 'redux-form';

import FloatingLabelInput from 'components/forms/FloatingLabel/GeneralInput';

import TransactionsActions from './Actions';

const renderRows = ({ fields }) =>
  fields.length ? (
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
        <TransactionsActions fields={fields} index={index} />
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" className="text-center" style={{ height: '63px' }}>
        Nenhum crédito foi cadastrado ainda!
      </td>
    </tr>
  );

const TransactionsCredit = () => (
  <FieldArray name="credits" component={renderRows} />
);

export default TransactionsCredit;
