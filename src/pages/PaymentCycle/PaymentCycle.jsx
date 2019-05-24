import React, { Component, lazy } from 'react';

import { Route, Redirect } from 'react-router';
import Lazy from 'routes/Lazy';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as statusActions } from 'store/ducks/status';
import { Actions as paymentCycleActions } from 'store/ducks/paymentCycle';

import Header from 'components/ContentHeader';

import {
  getPaymentCycles,
  getPaymentCycleById,
  addPaymentCycle,
  updatePaymentCycle,
  deletePaymentCycle
} from 'services/paymentCycle';

import { showConfirmModal } from 'utils/confirm';
import { showSuccessModal } from 'utils/success';
import { showErrorModal } from 'utils/error';

const PaymentCycleList = lazy(() => import('./List'));
const PaymentCycleForm = lazy(() => import('./Form'));

class PaymentCycle extends Component {
  componentDidMount() {
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

  createPaymentCycle = async values => {
    const { setLoading, history } = this.props;

    try {
      setLoading(true);
      await addPaymentCycle(values);
      showSuccessModal('Ciclo de pagamento adicionado com sucesso!').then(
        () => {
          this.getPaymentCycles();
          history.push('/me/payment-cycles');
        }
      );
    } catch (error) {
      showErrorModal(error);
    } finally {
      setLoading(false);
    }
  };

  savePaymentCycle = async values => {
    const { setLoading } = this.props;

    try {
      setLoading(true);
      await updatePaymentCycle(values);
      showSuccessModal('Ciclo de pagamento atualizado com sucesso!').then(
        () => {
          this.getPaymentCycles();
        }
      );
    } catch (error) {
      showErrorModal(error);
    } finally {
      setLoading(false);
    }
  };

  editPaymentCycle = paymentCycle => {
    const { history, match } = this.props;
    history.push(`${match.url}/details/${paymentCycle.id}`);
  };

  removePaymentCycle = async paymentCycle => {
    const { value: confirm } = await showConfirmModal(
      'Tem certeza de que quer mesmo remover este ciclo de pagamento? Os dados vinculados a ele serão perdidos...'
    );

    if (confirm) {
      const { setLoading } = this.props;

      try {
        setLoading(true);
        await deletePaymentCycle(paymentCycle.id);
        showSuccessModal('Ciclo de pagamento removido com sucesso!').then(
          () => {
            this.getPaymentCycles();
          }
        );
      } catch (error) {
        showErrorModal(error);
      } finally {
        setLoading(false);
      }
    }
  };

  render() {
    const { paymentCycles = {}, match } = this.props;

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
            render={props => (
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
            path={`${match.url}/create`}
            render={props => (
              <PaymentCycleForm {...props} onSubmit={this.createPaymentCycle} />
            )}
          />
          <Route
            exact
            path={`${match.url}/details`}
            render={() => <Redirect to={match.url} />}
          />
          <Route
            exact
            path={`${match.url}/details/:id`}
            render={props => (
              <PaymentCycleForm
                {...props}
                getPaymentCycle={this.getPaymentCycleById}
                onSubmit={this.savePaymentCycle}
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
