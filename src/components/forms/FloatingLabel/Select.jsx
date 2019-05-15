import React from 'react';
import classnames from 'classnames';

const Select = ({
  input: { value, ...input },
  meta: { touched, error },
  options = [],
  valueSelector,
  labelSelector,
  defaultValue,
  className,
  ...props
}) => (
  <div className={classnames('floating-label-input', className)}>
    <select
      {...input}
      {...props}
      defaultValue={defaultValue || ''}
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
      {options.map((opt, index) => {
        const optValue = valueSelector ? opt[valueSelector] : opt;
        const optLabel = labelSelector ? opt[labelSelector] : opt;

        return (
          <option
            key={index}
            value={optValue}
            selected={value === optValue}
            defaultValue={defaultValue === optValue}
          >
            {optLabel}
          </option>
        );
      })}
    </select>
    <label htmlFor={props.id}>{props.label}</label>
  </div>
);

export default Select;
