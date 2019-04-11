import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as statusActions } from 'store/ducks/status';
import { Actions as bankActions } from 'store/ducks/bank';

import Summary from './Summary';
import Balance from './Balance';

import { getBanks, getSummary, getSummaryByBank } from 'services/bank';

import { showErrorModal } from 'utils/error';

class Dashboard extends Component {
  componentWillMount() {
    this.loadDashboard();
  }

  loadDashboard = async () => {
    const { setLoading, setSummary, setBanks, setBanksSummaries } = this.props;
    try {
      setLoading(true);

      const [{ data: summary }, { data: banks }] = await Promise.all([
        getSummary(),
        getBanks()
      ]);

      const banksSummaries = await Promise.all(
        banks.map(bank => getSummaryByBank(bank.id))
      );

      setSummary(summary);
      setBanks(banks);
      setBanksSummaries(banksSummaries);
    } catch (error) {
      showErrorModal(error, true).then(this.loadDashboard);
    } finally {
      setLoading(false);
    }
  };

  render() {
    const { summary = {}, banks = [], banksSummaries = [] } = this.props;
    console.log(banksSummaries);

    return (
      <section className="my-3">
        <Summary summary={summary} />
        <Balance banks={banks} banksSummaries={banksSummaries} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  summary: state.bank.summary,
  banks: state.bank.banks,
  banksSummaries: state.bank.banksSummaries
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...statusActions, ...bankActions }, dispatch);

Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default Dashboard;
