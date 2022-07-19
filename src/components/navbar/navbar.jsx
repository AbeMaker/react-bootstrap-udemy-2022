import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png'
import './navbar.css'

const navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          <img className='logo' src={logo} alt='My logo' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#f9ab00' }} />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='#'>
                home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                about me
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                services
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                how work
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                portfolio
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar
