import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { withRouter } from 'react-router-dom';

const Transition = ({ location, children }) => (
  <div className="transition__content">
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="transition__animation"
        timeout={500}
      >
        {React.cloneElement(children, { location })}
      </CSSTransition>
    </TransitionGroup>
  </div>
);

export default withRouter(Transition);
