import React from 'react';

import IconButton from 'components/IconButton';

const Navbar = ({ user = {}, logout }) => (
  <nav className="navbar navbar-expand-lg navbar-light w-100">
    <ul className="navbar-nav ml-auto">
      <li>
        <p className="header__user">
          Olá, <b>{user.name && user.name.split(' ').shift()}</b>
        </p>
      </li>
      <li className="nav-item">
        <IconButton
          title="Sair"
          label="Sair"
          icon="sign-out-alt"
          className="btn btn-link"
          onClick={logout}
        />
      </li>
    </ul>
  </nav>
);

export default Navbar;
