import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import routes from 'routes/routes';

const Breadcrumb = ({ location }) => {
  const paths = location.pathname.split('/').slice(2);
  const active = paths.pop();

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {paths.map((path, index) => (
          <li
            key={index}
            className="breadcrumb-item"
            title={`Ir para: ${routes[path]}`}
          >
            <Link to={path}>{routes[path]}</Link>
          </li>
        ))}
        <li
          className="breadcrumb-item active"
          title="Você está aqui"
          aria-current="page"
        >
          {routes[active]}
        </li>
      </ol>
    </nav>
  );
};

export default withRouter(Breadcrumb);
