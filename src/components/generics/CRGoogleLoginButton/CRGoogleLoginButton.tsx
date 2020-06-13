import React from 'react'
import firebase from 'firebase'

export default function CRGoogleLoginButton() {
  const signInWithGoogle = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(googleAuthProvider)
  }

  return <button onClick={signInWithGoogle}>Entrar com o Google</button>
}
