import './FloatingLabel.scss';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Input from './Input';

const PasswordInput = props => {
  const [showPassword, toggleShowPassword] = useState(false);

  return (
    <div className="floating-label-input--password">
      <Input {...props} type={showPassword ? 'text' : 'password'} />
      <button
        type="button"
        tabIndex="-1"
        className="floating-label-input--password__btn"
        title={showPassword ? 'Esconder a senha' : 'Mostrar a senha'}
        onClick={() => toggleShowPassword(!showPassword)}
      >
        <FontAwesomeIcon icon={showPassword ? 'eye' : 'eye-slash'} />
      </button>
    </div>
  );
};

export default PasswordInput;
