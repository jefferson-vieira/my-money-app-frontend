import React, { Component } from 'react';

class PaymentCycleEdit extends Component {
  state = {
    paymentCycle: {}
  };

  async componentDidMount() {
    console.log('oi')

    // const { getPaymentCycle, match } = this.props;

    // const paymentCycle = await getPaymentCycle(match.params.id);
    // this.setState({ paymentCycle });

    const paymentCycle = (() => {
      return {id: 2}
    })()
    this.setState({ paymentCycle });

  }

  render() {
    const { paymentCycle } = this.state;

    return <span>{paymentCycle.id}</span>;
  }
}

export default PaymentCycleEdit;
