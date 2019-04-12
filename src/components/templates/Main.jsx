import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import { Actions as userActions } from 'store/ducks/user';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';

import Dashboard from 'pages/Dashboard';
import Bank from 'pages/Bank';

import { signout } from 'utils/auth';

class Main extends Component {
  state = {
    showSidebar: true
  };

  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  handleSignout = () => {
    signout();
    this.props.signout();
    this.props.history.push('/auth');
  };

  render() {
    const { showSidebar } = this.state;
    const { user } = this.props;

    return (
      <>
        <Sidebar show={showSidebar} />
        <div className="content">
          <Header
            sidebar={[showSidebar, this.toggleSidebar]}
            user={user}
            loggout={this.handleSignout}
          />
          <div className="container-fluid">
            <Route exact path="/me/dashboard" component={Dashboard} />
            <Route exact path="/me/banks" component={Bank} />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ signout: userActions.signout }, dispatch);

Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default Main;
