import React from 'react';

const SimpleInput = ({ input, ...props }) => (
  <input {...props} {...input} className="form-control" />
);

export default SimpleInput;
