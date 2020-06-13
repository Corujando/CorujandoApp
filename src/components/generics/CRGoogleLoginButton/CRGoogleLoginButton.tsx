import React from 'react'
import firebase from 'firebase'
import { CRButton } from '../button/CRButton'

interface CRGoogleLoginButtonProps {
  id?: string
  className?: string
}

export default function CRGoogleLoginButton({ id, className }: CRGoogleLoginButtonProps) {
  const signInWithGoogle = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(googleAuthProvider)
  }

  return (
    <CRButton onClick={signInWithGoogle} id={id} className={className}>
      Entrar com o Google
    </CRButton>
  )
}
