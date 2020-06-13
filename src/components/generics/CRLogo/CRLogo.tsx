import React from 'react'
import logo from '../../../assets/logo.png'

import './CRLogo.scss'

interface CRLogoProps {
  id?: string
  className?: string
}

export function CRLogo({ id, className }: CRLogoProps) {
  return (
    <span id={id} className={className}>
      <img src={logo} alt="Logo" />
      <p className="Logo__text">CORUJANDO</p>
    </span>
  )
}
