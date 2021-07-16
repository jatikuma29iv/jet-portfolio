import * as React from 'react'
import { Link } from 'gatsby'

export default function Navbar ({ app }) {
  return (

    <nav className='app-nav'>
      <ul className='nav'>
        <li className='nav-item'>
          <Link to='/notes' className='nav-link'>{ app }</Link> </li>
      </ul>

      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>Jet</Link> </li>
      </ul>

    </nav>
)}

