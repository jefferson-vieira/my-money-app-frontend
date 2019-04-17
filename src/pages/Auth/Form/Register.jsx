import React from 'react';

import Personal from './Register/Personal';
import Account from './Register/Account';
import Contact from './Register/Contact';

const Register = ({ getAddress, change, touch }) => (
  <>
    <Personal />
    <Account />
    <Contact getAddress={getAddress} change={change} touch={touch} />
  </>
);

export default Register;
