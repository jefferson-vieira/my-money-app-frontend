import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as statusActions } from 'store/ducks/status';

import PaymentCycleInformations from './Informations';
import PaymentCycleSummary from './Summary';
import PaymentCycleTransactions from './Transactions';
import PaymentCycleActions from './Actions';

import { getBanks } from 'services/bank';

import { showErrorModal } from 'utils/error';

class PaymentCycleForm extends Component {
  componentDidMount() {
    this.getBanks();
  }

  getBanks = async () => {
    const { setLoading, setBanks } = this.props;

    try {
      setLoading(true);
      const { data: banks } = await getBanks();
      setBanks(banks);
    } catch (error) {
      // showErrorModal(error, true).then(() => this.getBanks());
    } finally {
      setLoading(false);
    }
  };

  render() {
    console.log('render');

    const { handleSubmit, onSubmit, valid } = this.props;

    return (
      <section className="payment-cycle__form">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <PaymentCycleInformations />
          <hr />
          <PaymentCycleSummary />
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
  form: 'paymentCycleForm'
})(PaymentCycleForm);

const mapStateToProps = state => ({
  banks: state.bank.banks
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...statusActions }, dispatch);

PaymentCycleForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentCycleForm);

export default PaymentCycleForm;
