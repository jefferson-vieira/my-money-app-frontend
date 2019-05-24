import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconButton = ({ label, icon, color, className, ...props }) => (
  <button
    type="button"
    className={classnames('center-content', className)}
    {...props}
  >
    {label && <span className="mr-1">{label}</span>}
    <FontAwesomeIcon icon={icon} color={color} />
  </button>
);

export default IconButton;
