import React from 'react';
import classnames from 'classnames';

import { Router, NavLink } from 'react-router-dom';
import history from 'routes/history';

import Logo from '../Logo';
import Item from './Item';

const Sidebar = ({ mobile, show, toggleShow, className }) => (
  <Router history={history}>
    <nav className={classnames('sidebar', { active: show }, className)}>
      <div className="sidebar__container">
        <div className="sidebar__header">
          <NavLink to="/me/dashboard" onClick={mobile && toggleShow}>
            <Logo />
          </NavLink>
        </div>
        <ul className="sidebar__menu" onClick={mobile && toggleShow}>
          <Item
            to="/me/dashboard"
            icon="chart-line"
            label="Resumo"
            title="Veja o resumo da sua situação financeira"
          />
          <Item
            to="/me/banks"
            icon="university"
            label="Contas"
            title="Gerencie suas contas bancárias"
          />
        </ul>
      </div>
    </nav>
  </Router>
);

export default Sidebar;
