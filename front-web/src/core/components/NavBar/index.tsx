import React from 'react'
import './style.scss'

export default function index() {
  return (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <a href="link" className="nav-logo-text">
                <h4>DS Catalog</h4>
            </a>
        </div>
        <div className="col-6 offset-2">
            <ul className="main-menu">
                <li>
                    <a href="home" className="active">Home</a>
                </li>
                <li>
                    <a href="catalogo">Catálogo</a>
                </li>
                <li>
                    <a href="admin">Admin</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
