import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { money } from 'utils/formatter';

const ValueBox = ({ color, icon, text, value }) => (
  <div className={`value-box bg-${color}`} title={`Total do ${text}: $ ${money(value)}`}>
    <div className="value-box__icon">
      <FontAwesomeIcon icon={icon} size="3x" />
    </div>
    <div className="value-box__content">
      <h3>{text}</h3>
      <h3>$ {money(value)}</h3>
    </div>
  </div>
);

export default ValueBox;
