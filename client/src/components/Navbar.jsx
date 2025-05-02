import React from 'react'
import{Link, Route, Routes} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
      <a href='/' className='title'>titulo</a>
      <ul>
        <li>
          <a href="/proyects">Proyectos</a>
        </li>
        <li>
          <a href="/trayectory">Trayectoria</a>
        </li>
        <li>
          <a href="/about">Sobre mi</a>
        </li>
        <li>
          <a href="/contact">Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar