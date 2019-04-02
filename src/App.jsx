import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import Router from 'routes';
import Toastr from 'components/templates/Toastr';
import Loading from 'components/Loading';

class App extends Component {
  state = {
    showSidebar: true
  };

  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  render() {
    const { loading, user } = this.props;
    const { showSidebar } = this.state;

    return (
      <div className="wrapper">
        <Sidebar show={showSidebar} />
        <div className="content">
          <Header
            sidebar={[showSidebar, this.toggleSidebar]}
            user={user}
            loggout={() => alert('sair')}
          />
          <div className="container-fluid ">
            <Router />
          </div>
        </div>
        <Toastr />
        <Loading show={loading} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.status.loading,
  user: state.user.user
});

App = connect(
  mapStateToProps,
  null
)(App);

export default App;
