import React from 'react';

import { reduxForm, FormSection } from 'redux-form';

import Personal from './Personal';
import Contact from './Contact';
import Address from './Address'

const Form = ({ handleSubmit, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)} noValidate>
    <Personal />
    <Contact />
    <Address />
  </form>
);

export default reduxForm({
  form: 'authForm'
})(Form);
