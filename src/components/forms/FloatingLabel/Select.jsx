import React from 'react';
import classnames from 'classnames';

const Select = ({
  input: { value, ...input },
  meta: { touched, error },
  options = [],
  valueSelector,
  labelSelector,
  className,
  ...props
}) => (
  <div className={classnames('floating-label-input', className)}>
    <select
      {...input}
      {...props}
      value={value}
      className={classnames(
        {
          validate: value
        },
        touched && (error ? 'is-invalid' : 'is-valid')
      )}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((opt, index) => (
        <option key={index} value={valueSelector ? opt[valueSelector] : opt}>
          {labelSelector ? opt[labelSelector] : opt}
        </option>
      ))}
    </select>
    <label htmlFor={props.id}>{props.label}</label>
  </div>
);

export default Select;
