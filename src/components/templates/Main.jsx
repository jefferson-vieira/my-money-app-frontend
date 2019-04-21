import React, { Component, lazy } from 'react';
import { Route } from 'react-router';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions as userActions } from 'store/ducks/user';

import { logout } from 'utils/auth';

import Sidebar from './Sidebar';
import Header from './Header';
import Breadcrumb from './Breadcrumb';

import Lazy from 'routes/Lazy';

const Dashboard = lazy(() => import('pages/Dashboard'));
const Bank = lazy(() => import('pages/Bank'));

class Main extends Component {
  state = {
    showSidebar: true
  };

  componentDidMount() {
    if (window.screen.width < 768) {
      this.setState({ showSidebar: false });
    }
  }

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
          <div className="wrapper-content">
            <Breadcrumb />
            <div className="container-fluid">
              <Lazy>
                <Route exact path="/me/dashboard" component={Dashboard} />
                <Route exact path="/me/banks" component={Bank} />
              </Lazy>
            </div>
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
