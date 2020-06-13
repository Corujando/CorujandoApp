import React from 'react'
import CRGoogleLoginButton from '../generics/CRGoogleLoginButton/CRGoogleLoginButton'
import { Redirect } from 'react-router-dom'
import { FirebaseAuthConsumer } from '@react-firebase/auth'

export default function Login() {
  return (
    <FirebaseAuthConsumer>
      {({ isSignedIn }) => {
        if (isSignedIn) {
          return <Redirect to="/" />
        } else {
          return <CRGoogleLoginButton />
        }
      }}
    </FirebaseAuthConsumer>
  )
}
