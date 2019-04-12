import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as statusActions } from 'store/ducks/status';
import { Actions as bankActions } from 'store/ducks/bank';

import Summary from './Summary';
import Balance from './Balance';

import { getSummary, getBanksWithSummary } from 'services/bank';

import { showErrorModal } from 'utils/error';

class Dashboard extends Component {
  componentWillMount() {
    this.loadDashboard();
  }

  loadDashboard = async () => {
    const { setLoading, setSummary, setBanks } = this.props;

    try {
      setLoading(true);

      const [{ data: summary }, banks] = await Promise.all([
        getSummary(),
        getBanksWithSummary()
      ]);

      setSummary(summary);
      setBanks(banks);
    } catch (error) {
      showErrorModal(error, true).then(this.loadDashboard);
    } finally {
      setLoading(false);
    }
  };

  render() {
    const { summary = {}, banks = [] } = this.props;

    return (
      <section className="my-3">
        <Summary summary={summary} />
        <Balance banks={banks} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  summary: state.bank.summary,
  banks: state.bank.banks
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...statusActions, ...bankActions }, dispatch);

Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default Dashboard;
