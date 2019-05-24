import React from 'react';
import { connect } from 'react-redux';
import { arrayPush } from 'redux-form';

import Table from 'components/Table';
import IconButton from 'components/IconButton';

const TransactionsList = ({
  legend,
  header: Header,
  body: Body,
  field,
  dispatch
}) => (
  <div className="col-12 col-xl-6">
    <fieldset className="payment-cycle__form__transactions">
      <legend>{legend}</legend>
      <IconButton
        className="btn btn-primary"
        icon="plus"
        title="Adicionar novo pagamento"
        onClick={() => dispatch(arrayPush('paymentCycleForm', field, {}))}
      />
      <Table thead={Header} tbody={Body} />
    </fieldset>
  </div>
);

export default connect()(TransactionsList);
