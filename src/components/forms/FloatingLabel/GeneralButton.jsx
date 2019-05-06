import React from 'react';
import classnames from 'classnames';

import IconButton from 'components/IconButton';

const GeneralButton = ({ id, className, ...props }) => (
  <IconButton
    tabIndex="-1"
    className={classnames(`floating-label-input--${id}__btn`, className)}
    {...props}
  />
);

export default GeneralButton;
