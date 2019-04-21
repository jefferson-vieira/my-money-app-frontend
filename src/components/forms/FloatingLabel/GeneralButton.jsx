import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GeneralButton = ({ id, className, icon, ...props }) => (
  <button
    type="button"
    tabIndex="-1"
    className={classnames(`floating-label-input--${id}__btn`, className)}
    {...props}
  >
    <FontAwesomeIcon icon={icon} />
  </button>
);

export default GeneralButton;
