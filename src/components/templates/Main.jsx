import React, { Component } from 'react';
import { Route } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions as userActions } from 'store/ducks/user';

import Sidebar from 'components/templates/Sidebar';
import Header from 'components/templates/Header';
import Breadcrumb from './Breadcrumb';

import Dashboard from 'pages/Dashboard';
import Bank from 'pages/Bank';

import { logout } from 'utils/auth';

class Main extends Component {
  state = {
    showSidebar: true
  };

  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  handleSignout = () => {
    logout();
    this.props.logout();
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
          <Breadcrumb />
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
  bindActionCreators({ logout: userActions.logout }, dispatch);

Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default Main;
