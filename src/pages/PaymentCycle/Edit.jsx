import React, { Component } from 'react';

class PaymentCycleEdit extends Component {
  state = {
    paymentCycle: {}
  };

  componentDidMount() {
    const { getPaymentCycle, match } = this.props;

    const paymentCycle = getPaymentCycle(match.params.id);
    this.setState({ paymentCycle });
  }

  render() {
    const { paymentCycle = {} } = this.state;

    return <span>{paymentCycle.id}</span>;
  }
}

export default PaymentCycleEdit;
