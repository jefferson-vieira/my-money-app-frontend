import React from 'react';

import Card from './Card';
import New from './New';

const List = ({ banks, handleForm, removeBank }) => (
  <div className="bank__card-group container">
    <New addAccount={handleForm} />
    {banks.map(bank => (
      <Card
        key={bank.id}
        account={bank}
        removeAccount={() => removeBank(bank.id)}
      />
    ))}
  </div>
);

export default List;
