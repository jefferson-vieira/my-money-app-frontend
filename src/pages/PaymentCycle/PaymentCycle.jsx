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
  // componentWillMount() {
  //   this.getPaymentCycles();
  // }

  // getPaymentCycles = async () => {
  //   const { setLoading, setPaymentCycles } = this.props;

  //   try {
  //     setLoading(true);
  //     const { data: paymentCycles } = await getPaymentCycles();
  //     setPaymentCycles(paymentCycles);
  //   } catch (error) {
  //     showErrorModal(error, true).then(() => this.getPaymentCycles());
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  getPaymentCycleById = id => {
    console.log('id', id);
    return id == 1
      ? {
          id: 1,
          bankingAccount: { bankName: 'Oi' },
          description: 'asnduasnusfafnsua',
          date: '25/02/1998'
        }
      : id == 2
      ? {
          id: 2,
          bankingAccount: { bankName: 'Oi 2' },
          description: 'asnduasnusfafnsua 2',
          date: '25/02/1998 2'
        }
      : {};
  };

  editPaymentCycle = paymentCycle => {
    const { history, match } = this.props;
    history.push(`${match.url}/${paymentCycle.id}`);
  };

  removePaymentCycle = paymentCycle => {
    alert(paymentCycle.id);
  };

  render() {
    const {
      paymentCycles = [
        {
          id: 1,
          bankingAccount: { bankName: 'Oi' },
          description: 'asnduasnusfafnsua',
          date: '25/02/1998'
        }
      ],
      match
    } = this.props;

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
                edit={this.editPaymentCycle}
                remove={this.removePaymentCycle}
              />
            )}
          />
          <Route
            exact
            path={`${match.url}/:id`}
            component={props => (
              <PaymentCycleEdit
                {...props}
                getPaymentCycle={id => this.getPaymentCycleById(id)}
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
