import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemIcon = ({ pathname, page, label, icon, disabled, ...props }) => (
  <li className={classnames('page-item', { disabled })}>
    <Link
      to={{ pathname, search: `?page=${page}` }}
      className="page-link"
      aria-label={label}
      {...props}
    >
      <span aria-hidden="true">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="sr-only">{label}</span>
    </Link>
  </li>
);

export default ItemIcon;
