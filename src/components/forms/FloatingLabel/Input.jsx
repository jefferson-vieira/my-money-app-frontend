import './FloatingLabel.scss';

import React from 'react';
import classnames from 'classnames';

const FloatingLabelInput = ({
  input,
  meta: { touched, error },
  className,
  ...props
}) => (
  <div className={classnames('floating-label-input', className)}>
    <input
      {...input}
      {...props}
      className={classnames(
        {
          validate: input.value
        },
        touched && (error ? 'is-invalid' : 'is-valid')
      )}
    />
    <label htmlFor={props.id}>{props.label}</label>
  </div>
);

export default FloatingLabelInput;
