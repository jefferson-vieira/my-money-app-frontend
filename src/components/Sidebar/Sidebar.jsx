import React from 'react';
import classnames from 'classnames';

import { Router, NavLink } from 'react-router-dom';
import history from 'routes/history';

import Logo from '../Logo';
import Item from './Item';

const Sidebar = ({ show }) => (
  <Router history={history}>
    <nav className={classnames('sidebar', { active: show })}>
      <div className="sidebar__container">
        <div className="sidebar__header">
          <NavLink to="/dashboard">
            <Logo />
          </NavLink>
        </div>
        <ul className="sidebar__menu">
          <Item to="/me/dashboard" icon="chart-line" label="Resumo" />
          <Item to="/me/banks" icon="university" label="Contas" />
        </ul>
      </div>
    </nav>
  </Router>
);

export default Sidebar;
