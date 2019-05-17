import React from 'react';
import { withRouter } from 'react-router';

import routes from 'routes/routes';

import BackButton from 'components/BackButton';

const Breadcrumb = ({ location, match }) => {
  const paths = location.pathname.split('/').slice(2);
  const active = paths.pop();

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {paths.map((path, index) => (
          <li key={index} className="breadcrumb-item">
            <BackButton
              className="btn-link"
              label={routes[path]}
              title={`Ir para: ${routes[path]}`}
              back={index + 1}
            />
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
