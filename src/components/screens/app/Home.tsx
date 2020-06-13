import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
import CRSignOutButton from '../../generics/CRSignOutButton'

export const Home = () => {
  const location = useLocation()

  const isFirebaseObjectLoaded = (firebase: any) => {
    return Object.keys(firebase).length !== 0
  }

  return (
    <React.Fragment>
      <FirebaseAuthConsumer>
        {({ isSignedIn, firebase }) => {
          if (!isSignedIn) {
            return isFirebaseObjectLoaded(firebase) ? <Redirect to="/login" /> : null
          } else {
            return (
              <Switch location={location}>
                <Route path="/" exact component={CRSignOutButton} />
              </Switch>
            )
          }
        }}
      </FirebaseAuthConsumer>
    </React.Fragment>
  )
}
