import React from 'react';
import classnames from 'classnames';
import { withRouter, Link } from 'react-router-dom';

const BackButton = ({ match, className, label, title, back = 1 }) => {
  const pathname = match.url
    .split('/')
    .slice(0, -back)
    .join('/');

  return (
    <Link
      to={pathname}
      className={classnames('btn', className ? className : 'btn-secondary')}
      title={title || label}
    >
      {label}
    </Link>
  );
};

export default withRouter(BackButton);
