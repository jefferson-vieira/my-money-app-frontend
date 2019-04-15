import React from 'react';
import classnames from 'classnames';

const Input = ({
  input: { value, ...input },
  meta: { touched, error },
  className,
  ...props
}) => (
  <div className={classnames('form-group', className)}>
    <label htmlFor={props.id}>{props.label}</label>
    <input
      {...input}
      {...props}
      className={classnames(
        'form-control',
        touched && (error ? 'is-invalid' : 'is-valid')
      )}
    />
    <div className="invalid-feedback">{props.invalidFeedback}</div>
  </div>
);

export default Input;
