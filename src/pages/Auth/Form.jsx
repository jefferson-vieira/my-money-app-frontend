import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import Fade from 'components/animations/Fade';

import Login from './Form/Login';
import Register from './Form/Register';
import Actions from './Form/Actions';

import { getAddress } from 'services/address';

import { showInfoToast } from 'utils/info';
import { showSuccessToast } from 'utils/success';
import { showErrorToast } from 'utils/error';

class Form extends Component {
  getAddress = async () => {
    const { postalCode } = this.props;

    try {
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
      toggleAuthType,
      changePassword,
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
          <Fade show={!needsAccount}>
            <Login changePassword={changePassword} />
          </Fade>
          <Fade show={needsAccount}>
            <Register
              getAddress={this.getAddress}
              change={change}
              touch={touch}
            />
          </Fade>
          <Actions
            needsAccount={needsAccount}
            toggleAuthType={toggleAuthType}
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
  postalCode: formValueSelector('authForm')(state, 'address.postalCode')
}))(Form);

export default Form;
