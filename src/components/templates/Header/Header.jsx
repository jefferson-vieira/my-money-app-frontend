import React from 'react';
import classnames from 'classnames';

import Navbar from './Navbar';

const Header = ({ sidebar: [showSidebar, toggleSidebar], user, loggout }) => (
  <nav className="header">
    <button
      type="button"
      onClick={toggleSidebar}
      title={showSidebar ? 'Fechar menu' : 'Abir menu'}
      className="header__menu"
    >
      <div
        className={classnames('header__toggle-sidebar', {
          active: showSidebar
        })}
      >
        <span />
        <span />
        <span />
      </div>
    </button>
    <Navbar user={user} logout={loggout} />
  </nav>
);

export default Header;
