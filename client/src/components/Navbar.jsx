import React from 'react'
import{ Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/'>Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
                    <Link className="nav-link" to='/'>Sobre mi</Link>
                    <Link className="nav-link" to='/'>Proyectos</Link>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
