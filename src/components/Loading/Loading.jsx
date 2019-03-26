import React from 'react';

const Loading = ({ show }) =>
  show && (
    <div className="loading">
      <div className="loading__content" />
    </div>
  );

export default Loading;
