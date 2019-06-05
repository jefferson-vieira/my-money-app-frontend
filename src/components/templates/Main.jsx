import React, { Component, lazy } from 'react';
import { Route } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions as userActions } from 'store/ducks/user';

import { logout } from 'utils/auth';

import Sidebar from './Sidebar';
import Header from './Header';
import Breadcrumb from './Breadcrumb';

import Lazy from 'routes/LazyRoute';
import { Switch } from 'react-router';

const Dashboard = lazy(() => import('pages/Dashboard'));
const Bank = lazy(() => import('pages/Bank'));
const PaymentCycle = lazy(() => import('pages/PaymentCycle'));

class Main extends Component {
  state = {
    showSidebar: !this.props.mobile
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
    const { user, mobile } = this.props;

    return (
      <>
        <Sidebar
          mobile={mobile}
          show={showSidebar}
          toggleShow={this.toggleSidebar}
        />
        <div className="content">
          <Header
            sidebar={[showSidebar, this.toggleSidebar]}
            user={user}
            logout={this.handleSignout}
          />
          <div
            className="wrapper-content"
            onClick={() => mobile && this.setState({ showSidebar: false })}
          >
            <Breadcrumb />
            <div className="container-fluid">

                {this.props.children}

            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  mobile: state.status.mobile
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ logout: userActions.logout }, dispatch);

Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default Main;
