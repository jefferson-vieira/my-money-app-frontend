import React from 'react';

import { CSSTransition } from 'react-transition-group';

const Fade = ({ show, children }) => (
  <CSSTransition in={show} timeout={300} classNames="fade" unmountOnExit>
    {children}
  </CSSTransition>
);

export default Fade;
