import React from 'react';

import { Field } from 'redux-form';

const Checkbox = ({ name, id, label }) => (
  <div className="form-group">
    <div className="form-check">
    <span></span>
      <Field
        name={name}
        id={id}
        component="input"
        type="checkbox"
        className="form-check-input"
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  </div>
);

export default Checkbox;
