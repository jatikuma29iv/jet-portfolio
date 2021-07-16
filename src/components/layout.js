import * as React from 'react'

import Navbar from './navbar'

import '../styles.sass'

export default function Layout({ title, children }) {
  return (
  <main className='app'>
    <Navbar app='Notebook' />
    <div className='app-content'>
      { children }
    </div>
  </main>
)}
