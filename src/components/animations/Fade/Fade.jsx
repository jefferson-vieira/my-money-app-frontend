import React from 'react';
import { Transition } from 'react-transition-group';

const Fade = ({ show, duration = 500, delay = 0, children }) => (
  <Transition in={show} timeout={duration}>
    {state => (
      <div
        className={`fade-transition fade-transition--${state}`}
        style={{
          transition: `opacity ${duration}ms ease-in-out`,
          transitionDelay: `${delay}ms`
        }}
      >
        {show && children}
      </div>
    )}
  </Transition>
);

export default Fade;
