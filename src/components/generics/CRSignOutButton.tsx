import React from 'react'
import { WrappedComponentProps } from 'react-with-firebase-auth'
import firebase from 'firebase'

export default function CRSignOutButton(props: WrappedComponentProps) {
  const handleGoogleSignOutClick = () => {
    firebase.auth().signOut()
  }

  return <button onClick={handleGoogleSignOutClick}>Sair</button>
}
