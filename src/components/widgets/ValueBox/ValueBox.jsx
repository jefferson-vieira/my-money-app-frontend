import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ValueBox = ({ color, icon, text, value }) => (
  <div class={`value-box bg-${color}`} title={`${text}: ${value}`}>
    <div class="value-box__icon">
      <FontAwesomeIcon icon={icon} size="3x" />
    </div>
    <div class="value-box__content">
      <h3>{text}</h3>
      <h1>R$ {value}</h1>
    </div>
  </div>
);

export default ValueBox;
