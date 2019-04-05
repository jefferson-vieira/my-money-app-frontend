import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ addAccount }) => (
  <div className="card" title="Nova conta" onClick={addAccount}>
    <div className="card-body">
      <div className="card-add">
        <FontAwesomeIcon icon="plus" size="3x" />
      </div>
    </div>
  </div>
);

export default Card;
