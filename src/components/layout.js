import * as React from 'react'

import Navbar from './navbar'

import '../styles.sass'

export default function Layout({ title, children }) {
  return (
  <>
    <Navbar />
    { children }
  </>
)}
