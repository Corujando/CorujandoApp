import React from 'react'
import logo from '../../../assets/logo.png'

import './CRLogo.scss'

export function CRLogo() {
  return (
    <>
      <img src={logo} alt="Logo" />
      <p className="Logo__text">CORUJANDO</p>
    </>
  )
}
