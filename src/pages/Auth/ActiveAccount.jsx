import React, { Component } from 'react';
import { Redirect } from 'react-router';

import Loading from 'components/templates/Loading';
import { activeAccount } from 'services/auth';

import { showSuccessModal } from 'utils/success';
import { showErrorModal } from 'utils/error';

class ActiveAccount extends Component {
  state = {
    authenticated: false
  };

  componentWillMount() {
    activeAccount(this.props.match.params.token)
      .then(() => {
        this.setState({ authenticated: true });
        showSuccessModal('Conta ativada com sucesso!');
      })
      .catch(() => {
        showErrorModal();
      });
  }

  render() {
    const { authenticated } = this.state;

    return authenticated ? <Redirect to="/auth" /> : <Loading show={true} />;
  }
}

export default ActiveAccount;
