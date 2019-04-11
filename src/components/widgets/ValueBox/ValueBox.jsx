import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { money } from 'utils/formatter';

const ValueBox = ({ color, icon, text, value }) => (
  <div className={`value-box bg-${color}`} title={`${text}: $ ${money(value)}`}>
    <div className="value-box__icon">
      <FontAwesomeIcon icon={icon} size="3x" />
    </div>
    <div className="value-box__content">
      <h3>{text}</h3>
      <h1>$ {money(value)}</h1>
    </div>
  </div>
);

export default ValueBox;
