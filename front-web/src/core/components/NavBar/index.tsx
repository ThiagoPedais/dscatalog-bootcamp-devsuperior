import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss'

export default function index() {
  return (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link to="/" className="nav-logo-text">
                <h4>DS Catalog</h4>
            </Link>
        </div>
        <div className="col-6 offset-2">
            <ul className="main-menu">
                <li>
                    <NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)' })}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="catalog" style={({ isActive }) => ({ color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)' })}>Catálogo</NavLink>
                </li>
                <li>
                    <NavLink to="admin" style={({ isActive }) => ({ color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.5)' })}>Admin</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}
