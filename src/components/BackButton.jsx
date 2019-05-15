import React from 'react';
import classnames from 'classnames';
import { withRouter, Link } from 'react-router-dom';

const BackButton = ({ match, className, label, title }) => {
  const pathname = match.url
    .split('/')
    .slice(0, -1)
    .join('/');

  return (
    <Link
      to={pathname}
      className={classnames('btn btn-secondary', className)}
      title={title || label}
    >
      {label}
    </Link>
  );
};

export default withRouter(BackButton);
