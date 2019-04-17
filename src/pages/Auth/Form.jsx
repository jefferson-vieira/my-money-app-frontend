import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import Login from './Form/Login';
import Register from './Form/Register';
import Actions from './Form/Actions';

import { getAddress } from 'services/address';

import { showInfoToast } from 'utils/info';
import { showSuccessToast } from 'utils/success';
import { showErrorToast } from 'utils/error';
import Fade from 'components/animations/Fade';

class Form extends Component {
  getAddress = async () => {
    try {
      const { postalCode } = this.props;
      if (postalCode) {
        showInfoToast('Buscando endereço pelo CEP...');
        const address = await getAddress(postalCode);
        showSuccessToast('O endereço foi encontrado!');
        return address;
      }
    } catch {
      showErrorToast('O CEP informado não foi encontrado!');
    }
  };

  render() {
    const {
      authType,
      needsAccount,
      changeAuthType,
      handleSubmit,
      onSubmit,
      change,
      touch,
      valid
    } = this.props;

    return (
      <div className="auth__form">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <h2 className="auth__title">{authType}</h2>
          <Fade show={needsAccount}>
            <Register
              getAddress={this.getAddress}
              change={change}
              touch={touch}
            />
          </Fade>
          <Fade show={!needsAccount}>
            <Login onSubmit={onSubmit} />
          </Fade>
          <Actions
            needsAccount={needsAccount}
            changeAuthType={changeAuthType}
            valid={valid}
          />
        </form>
      </div>
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
