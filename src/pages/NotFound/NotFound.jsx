import React from 'react'
import { Link }from 'react-router-dom'

const NotFound = () => (
  <section id="not-found" className="not-found">
    <section className="container my-5">
      <div className="not-found__message my-5">
        <h2>Página não encontrada.</h2>
        <h3>Clique no botão abaixo para ir até a página inicial.</h3>
        <Link to="/account/dashboard" className="btn btn-light mt-3">Home</Link>
      </div>
    </section>
  </section>
)

export default NotFound;
