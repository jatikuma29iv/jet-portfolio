import * as React from 'react'
import { Link } from 'gatsby'

export default function Navbar ({ app }) {
  return (
  <nav>
    <Link to='/'>{app}</Link>
    <Link to='/'>Home</Link>
    <Link to='/notes'>Notes</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
  </nav>
)}

