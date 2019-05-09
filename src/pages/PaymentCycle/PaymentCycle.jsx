import React, { Component, lazy } from 'react';

import { Route } from 'react-router';
import Lazy from 'routes/Lazy';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as statusActions } from 'store/ducks/status';
import { Actions as paymentCycleActions } from 'store/ducks/paymentCycle';

import Header from 'components/ContentHeader';

import { getPaymentCycles, getPaymentCycleById } from 'services/paymentCycle';
import { showErrorModal } from 'utils/error';

const PaymentCycleList = lazy(() => import('./List'));
const PaymentCycleEdit = lazy(() => import('./Edit'));

class PaymentCycle extends Component {
  componentWillMount() {
    this.getPaymentCycles(1);
  }

  getPaymentCycles = async page => {
    const { setLoading, setPaymentCycles } = this.props;

    try {
      setLoading(true);
      const { data: paymentCycles } = await getPaymentCycles(page - 1);
      setPaymentCycles(paymentCycles);
    } catch (error) {
      showErrorModal(error, true).then(() => this.getPaymentCycles(page));
    } finally {
      setLoading(false);
    }
  };

  getPaymentCycleById = async id => {
    const { setLoading } = this.props;

    try {
      setLoading(true);
      const { data: paymentCycle } = await getPaymentCycleById(id);
      return paymentCycle;
    } catch (error) {
      showErrorModal(error, true).then(() => this.getPaymentCycleById(id));
    } finally {
      setLoading(false);
    }
  };

  editPaymentCycle = paymentCycle => {
    const { history, match } = this.props;
    history.push(`${match.url}/${paymentCycle.id}`);
  };

  removePaymentCycle = paymentCycle => {
    alert(paymentCycle.id);
  };

  render() {
    const { paymentCycles, match } = this.props;

    return (
      <section id="payment-cycle" className="payment-cycle">
        <Header
          primary="Pagamentos"
          secondary="Gerencie seus ciclos de pagamentos"
        />
        <Lazy>
          <Route
            exact
            path={match.url}
            component={props => (
              <PaymentCycleList
                {...props}
                paymentCycles={paymentCycles}
                getPaymentCycles={this.getPaymentCycles}
                editPaymentCycle={this.editPaymentCycle}
                removePaymentCycle={this.removePaymentCycle}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/:id`}
            component={props => (
              <PaymentCycleEdit
                {...props}
                getPaymentCycle={this.getPaymentCycleById}
              />
            )}
          />
        </Lazy>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  paymentCycles: state.paymentCycle.paymentCycles
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...statusActions, ...paymentCycleActions }, dispatch);

PaymentCycle = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentCycle);

export default PaymentCycle;
