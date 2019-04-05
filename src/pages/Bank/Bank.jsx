import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as statusActions } from 'store/ducks/status';
import { Actions as bankActions } from 'store/ducks/bank';

import Form from './Form';
import List from './List';

import { getBanks, addBank } from 'services/bank';

import { showErrorModal } from 'utils/error';
import { showSuccessModal } from 'utils/success';

class Bank extends Component {
  state = {
    showForm: false
  };

  componentWillMount() {
    this.getBanks();
  }

  getBanks = async () => {
    const { setLoading, setBanks } = this.props;
    try {
      setLoading(true);
      const { data: banks } = await getBanks();
      setBanks(banks);
    } catch (error) {
      showErrorModal(error);
    } finally {
      setLoading(false);
    }
  };

  handleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addBank = async values => {
    const { setLoading, user } = this.props;
    try {
      setLoading(true);
      await addBank({ ...values, userId: user.id });
    } catch (error) {
      showErrorModal(error);
    } finally {
      setLoading(false);
    }

    await showSuccessModal('Conta adicionada com sucesso!');
    this.setState({ showForm: false });
    this.getBanks();
  };

  removeBank = bankId => {
    alert('remove ' + bankId);
  };

  render() {
    const { showForm } = this.state;
    const { banks = [] } = this.props;

    return (
      <section className="my-3">
        <h1>Contas</h1>
        <span>Gerencie suas contas bancárias</span>
        <hr />
        {showForm ? (
          <Form handleForm={this.handleForm} onSubmit={this.addBank} />
        ) : (
          <List
            banks={banks}
            removeBank={this.removeBank}
            handleForm={this.handleForm}
          />
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  banks: state.bank.banks,
  user: state.user.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...statusActions, ...bankActions }, dispatch);

Bank = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bank);

export default Bank;
