import React, { useState } from 'react'
import { CRLogo } from '../../generics/CRLogo/CRLogo'
import './Login.scss'
import { CRButton } from '../../generics'

export function Login() {
  const [id, setId] = useState('')

  function load() {
    setTimeout(() => {
      setId('logo')
    }, 3000)
  }

  function renderEverything() {
    return (
      <>
        <p id={`${id}Content`} className="initial-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam montes a dictumst
          habitasse.
        </p>

        <CRButton id={`${id}ContentButton`} className="Initial__button" onClick={() => {}}>
          Entrar com o google
        </CRButton>
      </>
    )
  }

  load()

  return (
    <div className="Initial">
      <div className="Initial__content">
        <CRLogo className="Initial__Logo" id={id} />
        {renderEverything()}
      </div>
    </div>
  )
}
