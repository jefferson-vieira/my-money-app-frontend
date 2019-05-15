import React from 'react';

const Table = ({ thead: THeadComponent, tbody: TBodyComponent }) => (
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <THeadComponent />
      </thead>
      <tbody>
        <TBodyComponent />
      </tbody>
    </table>
  </div>
);

export default Table;
