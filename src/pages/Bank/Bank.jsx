import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as statusActions } from 'store/ducks/status';
import { Actions as bankActions } from 'store/ducks/bank';

import Header from 'components/ContentHeader';

import Form from './Form';
import List from './List';

import { getBanks, addBank, deleteBank } from 'services/bank';

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
      showErrorModal(error, true).then(() => this.getBanks());
    } finally {
      setLoading(false);
    }
  };

  addBank = async values => {
    const { setLoading } = this.props;

    try {
      setLoading(true);
      await addBank(values);
      showSuccessModal('Conta adicionada com sucesso!').then(() => {
        this.setState({ showForm: false });
        this.getBanks();
      });
    } catch (error) {
      showErrorModal(error);
    } finally {
      setLoading(false);
    }
  };

  removeBank = async bankId => {
    const { setLoading } = this.props;

    try {
      setLoading(true);
      await deleteBank(bankId);
      showSuccessModal('Conta removida com sucesso!').then(() => {
        this.getBanks();
      });
    } catch (error) {
      showErrorModal(error);
    } finally {
      setLoading(false);
    }
  };

  handleForm = async () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    const { showForm } = this.state;
    const { banks = [] } = this.props;

    return (
      <section className="my-3">
        <Header primary="Contas" secondary="Gerencie suas contas bancárias" />
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
  banks: state.bank.banks
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...statusActions, ...bankActions }, dispatch);

Bank = connect(
  mapStateToProps,
  mapDispatchToProps
)(Bank);

export default Bank;
