import React from 'react';
import classnames from 'classnames';

import Fade from 'components/animations/Fade';

export default ({
  input: { value, ...input },
  id,
  name,
  type,
  autoComplete,
  className,
  label,
  maxlength,
  meta: { touched, error },
  validateMessage
}) => (
  <div className={classnames('floating-label-input', className)}>
    <input
      {...input}
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      className={classnames({
        validate: value,
        'is-valid': !error,
        'is-invalid': touched && error
      })}
      maxLength={maxlength}
    />
    <label htmlFor={id}>{label}</label>
    <Fade show={!!validateMessage}>
      <small className="form-text text-muted">{validateMessage}</small>
    </Fade>
  </div>
);
