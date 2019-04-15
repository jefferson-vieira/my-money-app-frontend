import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Navbar from './Navbar';

const Header = ({ sidebar: [showSidebar, toggleSidebar], user, loggout }) => (
  <nav className="header">
    <button
      type="button"
      onClick={toggleSidebar}
      title={showSidebar ? 'Fechar menu' : 'Abir menu'}
      className="header__menu"
    >
      <FontAwesomeIcon icon="bars" size="2x" />
    </button>
    <Navbar user={user} logout={loggout} />
  </nav>
);

export default Header;
