import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ addAccount }) => (
  <div className="bank__add card" title="Nova conta" onClick={addAccount}>
    <div className="card-body">
      <div className="card-add">
        <FontAwesomeIcon icon="plus" size="6x" />
      </div>
    </div>
  </div>
);

export default Card;
