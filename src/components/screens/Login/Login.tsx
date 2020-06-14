import { FirebaseAuthConsumer } from '@react-firebase/auth'
import React, { useState } from 'react'
import { Redirect } from 'react-router'
import CRGoogleLoginButton from '../../generics/CRGoogleLoginButton/CRGoogleLoginButton'
import { CRLogo } from '../../generics/CRLogo/CRLogo'
import './Login.scss'

import { Article } from '../Article/Article'

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

        <CRGoogleLoginButton id={`${id}ContentButton`} className="Initial__button" />
      </>
    )
  }

  load()

  return (
    // <FirebaseAuthConsumer>
    //   {({ isSignedIn }) => {
    //     if (isSignedIn) {
    //       return <Redirect to="/" />
    //     }
    //     return (
    //       <div className="Login">
    //         <div className="Login__content">
    //           <CRLogo className="Login__Logo" id={id} />
    //           {renderEverything()}
    //         </div>
    //       </div>
    //     )
    //   }}
    // </FirebaseAuthConsumer>
    <Article/>
  )
}
