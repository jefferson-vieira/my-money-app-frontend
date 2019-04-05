import React from 'react';

import classnames from 'classnames';

import Fade from 'components/animations/Fade';

export default ({
  input,
  id,
  name,
  type,
  autoComplete,
  label,
  meta: { touched, error },
  validateMessage
}) => (
  <div className="floating-label-input">
    <input
      {...input}
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      className={classnames({
        validate: input.value || false,
        'is-valid': !error,
        'is-invalid': touched && error
      })}
    />
    <label htmlFor={id}>{label}</label>
    <Fade show={!!validateMessage}>
      <small className="form-text text-muted">{validateMessage}</small>
    </Fade>
  </div>
);
