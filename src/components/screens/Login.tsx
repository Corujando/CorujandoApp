import React from 'react'
import CRGoogleLoginButton from '../generics/CRGoogleLoginButton/CRGoogleLoginButton'
import { Redirect } from 'react-router-dom'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
import { CRPopUp } from './../generics/'

export default function Login() {
  return (
    // <FirebaseAuthConsumer>
    //   {({ isSignedIn }) => {
    //     if (isSignedIn) {
    //       return <Redirect to="/" />
    //     } else {
    //       return <CRGoogleLoginButton />
    //     }
    //   }}
    // </FirebaseAuthConsumer>
    <div className="div">
      <CRPopUp
      
      />
    </div>
  )
}
