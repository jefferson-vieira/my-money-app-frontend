import './FloatingLabel.scss';

import React from 'react';

import Input from './GeneralInput';
import Button from './GeneralButton';

const PasswordInput = ({ onClick, ...props }) => {
  return (
    <div className="floating-label-input--postal-code">
      <Input {...props} />
      <Button
        id="postal-code"
        icon="sync-alt"
        title="Carregar endereço do CEP"
        onClick={onClick}
      />
    </div>
  );
};

export default PasswordInput;
