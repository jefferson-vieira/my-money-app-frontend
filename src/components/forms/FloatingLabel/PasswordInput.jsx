import './FloatingLabel.scss';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';

import Input from './GeneralInput';

const PasswordInput = props => {
  const [showPassword, toggleShowPassword] = useState(false);
  const [showCapsLockTootip, toggleShowCapsLockTootip] = useState(false);

  return (
    <div className="floating-label-input--password">
      <Input
        {...props}
        type={showPassword ? 'text' : 'password'}
        onKeyDown={e => {
          if (e.getModifierState) {
            !e.getModifierState('CapsLock') ?
            ReactTooltip.show(findDOMNode(this.refs.foo))
            :
          }
        }}
        data-tip
        data-for={props.id}
        data-event='focus'
        data-event-off='blur'
      />
      {showCapsLockTootip && <ReactTooltip id={props.id} place="right" effect="solid">
        CapsLock Ligado!
      </ReactTooltip>}
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
