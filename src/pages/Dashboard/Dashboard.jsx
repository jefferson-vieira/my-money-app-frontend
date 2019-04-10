import React from 'react';
import { Link } from 'react-router-dom';
import Summary from './Summary';

const NotFound = () => (
  <section className="my-3">
    <h1>Resumo</h1>
    <span>Veja o resumo das suas movimentações financeiras</span>
    <hr />
    <Summary color="primary" text="Oi" value="12000" />
    <h1>Balanço</h1>
    <span>Veja o resumo das suas contas bancárias</span>
    <hr />
  </section>
);

export default NotFound;
