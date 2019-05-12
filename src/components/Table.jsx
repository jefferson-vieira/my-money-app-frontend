import React from 'react';

const Table = ({ thead, tbody }) => (
  <div className="table-responsive">
    <table className="table table-hover">
      <thead>{thead}</thead>
      {tbody}
    </table>
  </div>
);

export default Table;
