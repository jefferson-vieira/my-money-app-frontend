import React, { Component } from 'react';
import { reduxForm, initialize, formValueSelector } from 'redux-form';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as statusActions } from 'store/ducks/status';
import { Actions as bankActions } from 'store/ducks/bank';

import PaymentCycleInformations from './Informations';
import PaymentCycleSummary from './Summary';
import PaymentCycleTransactions from './Transactions';
import PaymentCycleActions from './Actions';

import { getBanks } from 'services/bank';

import { showErrorModal } from 'utils/error';

class PaymentCycleForm extends Component {
  componentDidMount() {
    this.initialize();
    this.getBanks();
  }

  initialize = async () => {
    const { setLoading, getPaymentCycle, match, initialize } = this.props;

    if (!match.params.id) return;

    try {
      setLoading(true);
      const paymentCycle = await getPaymentCycle(match.params.id);
      initialize(paymentCycle);
    } catch (error) {
      showErrorModal(error, true).then(() => this.getPaymentCycle());
    } finally {
      setLoading(false);
    }
  };

  getBanks = async () => {
    const { setLoading, setBanks } = this.props;

    try {
      setLoading(true);
      const { data: banks } = await getBanks();
      setBanks(banks);
    } catch (error) {
      showErrorModal(error, true).then(() => this.getBanks());
    } finally {
      setLoading(false);
    }
  };

  render() {
    const { banks, summary, handleSubmit, onSubmit, valid } = this.props;

    return (
      <section className="payment-cycle__form">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <PaymentCycleInformations banks={banks} />
          <hr />
          <PaymentCycleSummary summary={summary} />
          <hr />
          <PaymentCycleTransactions />
          <hr />
          <PaymentCycleActions valid={valid} />
        </form>
      </section>
    );
  }
}

PaymentCycleForm = reduxForm({
  form: 'paymentCycleForm',
  keepDirtyOnReinitialize: true,
  enableReinitialize: true
})(PaymentCycleForm);

const mapStateToProps = state => ({
  banks: state.bank.banks,
  summary: formValueSelector('paymentCycleForm')(state, 'credits', 'debits')
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...statusActions,
      ...bankActions,
      initialize: paymentCycle => initialize('paymentCycleForm', paymentCycle)
    },
    dispatch
  );

PaymentCycleForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentCycleForm);

export default PaymentCycleForm;
