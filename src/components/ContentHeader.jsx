import React from 'react';

const ContentHeader = ({ primary, secondary }) => (
  <header>
    <h1>{primary}</h1>
    <span>{secondary}</span>
    <hr />
  </header>
);

export default ContentHeader;
