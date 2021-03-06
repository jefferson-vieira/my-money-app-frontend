import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({ to, icon, label, title }) => (
  <li className="sidebar__menu-item">
    <NavLink to={to} activeClassName="active" title={title}>
      <FontAwesomeIcon icon={icon} size="lg" />
      {label}
    </NavLink>
  </li>
);

export default Item;
