import './FloatingLabel.scss';

import React, { useState } from 'react';

import Input from './GeneralInput';
import Button from './GeneralButton';

const PasswordInput = props => {
  const [showPassword, toggleShowPassword] = useState(false);

  return (
    <div className="floating-label-input--password">
      <Input {...props} type={showPassword ? 'text' : 'password'} />
      <Button
        id="password"
        icon={showPassword ? 'eye' : 'eye-slash'}
        title={showPassword ? 'Esconder a senha' : 'Mostrar a senha'}
        onClick={() => toggleShowPassword(!showPassword)}
      />
    </div>
  );
};

export default PasswordInput;
