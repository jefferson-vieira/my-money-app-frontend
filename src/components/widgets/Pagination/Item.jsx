import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const PaginationItem = ({ pathname, page, active, ...props }) => (
  <li className={classnames('page-item', { active })}>
    <Link to={{ pathname, search: `?page=${page}` }} className="page-link" {...props}>
      {page}
      {active && <span className="sr-only">(Atual)</span>}
    </Link>
  </li>
);

export default PaginationItem;
