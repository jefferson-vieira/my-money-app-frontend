import React, { Component } from 'react';
import { connect } from 'react-redux';

import Router from 'routes';
import Toastr from 'components/templates/Toastr';
import Loading from 'components/templates/Loading';

class App extends Component {
  render() {
    const { loading } = this.props;

    return (
      <div className="wrapper">
        <Router />
        <Toastr />
        <Loading show={loading} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.status.loading
});

App = connect(
  mapStateToProps,
  null
)(App);

export default App;
