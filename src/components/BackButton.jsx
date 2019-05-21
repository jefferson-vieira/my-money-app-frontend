import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const BackButton = ({ location, className, label, title, back = 1 }) => {
  const pathname = location.pathname
    .split('/')
    .slice(0, -back)
    .join('/');

  return (
    <Link
      to={pathname}
      className={className || 'btn btn-secondary'}
      title={title || label}
    >
      {label}
    </Link>
  );
};

export default withRouter(BackButton);
