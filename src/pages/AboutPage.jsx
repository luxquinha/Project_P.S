import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <div>
      <header>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/sobre'}>Sobre nós</Link></li>
          <li><Link to={'/contato'}>Contato</Link></li>
        </ul>
      </header>
      <main>
          <h1>Sobre nós</h1>
        </main>
    </div>
  )
}

export default AboutPage