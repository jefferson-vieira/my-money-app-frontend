import React from 'react';
import classnames from 'classnames';

const LabelInput = ({
  input,
  className,
  id,
  label,
  type,
  maxLength,
  max,
  min,
  placeholder,
  meta: { touched, error },
  invalidFeedback
}) => (
  <div className={classnames('form-group', className)}>
    <label htmlFor={id}>{label}</label>
    <input
      {...input}
      id={id}
      type={type || 'text'}
      maxLength={maxLength}
      max={max}
      min={min}
      className={classnames(
        'form-control',
        touched && (error ? 'is-invalid' : 'is-valid')
      )}
      aria-describedby={placeholder}
      placeholder={placeholder}
    />
    <div className="invalid-feedback">{invalidFeedback}</div>
  </div>
);

export default LabelInput;
