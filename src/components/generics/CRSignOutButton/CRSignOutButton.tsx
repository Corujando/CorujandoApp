import React from 'react'
import firebase from 'firebase'
import { CRButton } from '../button/CRButton'

interface CRSignOutButtonProps {
  text?: string,
  disable?: boolean,
  className?: string,
  children?: string
}

export default function CRSignOutButton(props: CRSignOutButtonProps) {
  const handleGoogleSignOutClick = () => {
    firebase.auth().signOut()
  }

  return <CRButton {...props} onClick={handleGoogleSignOutClick}/>
}
