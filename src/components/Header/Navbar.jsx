import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = ({ user = {}, logout }) => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light w-100">
      <ul className="navbar-nav ml-auto">
        <li>
          <p className="header__user">
            Olá, <b>{user.name.split(' ').shift()}</b>
          </p>
        </li>
        <li className="nav-item">
          <button title="Sair" className="btn btn-link" onClick={logout}>
            Sair <FontAwesomeIcon icon="sign-out-alt" />
          </button>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;
