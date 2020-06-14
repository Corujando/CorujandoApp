import { FirebaseAuthConsumer } from '@react-firebase/auth'
import React, { useState } from 'react'
import { Redirect } from 'react-router'
import { UserService } from '../../../services/userService'
import CRGoogleLoginButton from '../../generics/CRGoogleLoginButton/CRGoogleLoginButton'
import { CRLogo } from '../../generics/CRLogo/CRLogo'
import './Login.scss'

export function Login() {
  const [id, setId] = useState('')
  const userService = new UserService()

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

  async function saveUser(user: any) {
    const userFromDb = await userService.get(user!!.email)
    if (!userFromDb) {
      userService.add(user.displayName, user.email, user.photoURL)
      return
    }
    userService.setLoogedUser(userFromDb.id)
  }

  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn, user }) => {
        if (isSignedIn) {
          saveUser(user)
          return <Redirect to="/" />
        }
        return (
          <div className="Login">
            <div className="Login__content">
              <CRLogo className="Login__Logo" id={id} />
              {renderEverything()}
            </div>
          </div>
        )
      }}
    </FirebaseAuthConsumer>
  )
}
