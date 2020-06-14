import React from 'react'
import logo from '../../../assets/logo.png'

import './CRFooter.scss'

export function CRFooter() {
  return (
    <footer className="CRFooter">
      <img src={logo} className="CRFooter__LogoImage" alt="Corujando" />
      <p className="CRFooter__LogoText">CORUJANDO</p>
    </footer>
  )
}
