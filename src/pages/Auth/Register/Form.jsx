import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, FormSection, formValueSelector } from 'redux-form';

import Personal from './Personal';
import Account from './Account';
import Contact from './Contact';

import { getAddress } from 'services/address';

import { showErrorToast } from 'utils/error';

class Form extends Component {
  getAddress = async () => {
    try {
      const { postalCode } = this.props;
      if (postalCode) return await getAddress(postalCode);
    } catch {
      showErrorToast('O CEP informado não foi encontrado!');
    }
  };

  render() {
    const { handleSubmit, onSubmit, change, touch } = this.props;

    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Personal />
        <Account />
        <Contact getAddress={this.getAddress} change={change} touch={touch} />
      </form>
    );
  }
}

Form = reduxForm({
  form: 'authForm'
})(Form);

Form = connect(state => ({
  postalCode: formValueSelector('authForm')(state, 'postalCode')
}))(Form);

export default Form;
