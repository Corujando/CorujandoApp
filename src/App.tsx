import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Paths from './config/Paths'
import 'firebase/auth'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import * as firebase from 'firebase/app'
import firebaseConfig from './config/FirebaseConfig'
import Login from './components/screens/Login'
import './App.scss'
import { Home } from './components/screens/app/Home'

function App() {
  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <BrowserRouter>
        <Switch>
          <Route exact path={Paths.LOGIN} component={Login} />
          <Route path={Paths.HOME} component={Home} />
          <Redirect to={Paths.HOME} />
        </Switch>
      </BrowserRouter>
    </FirebaseAuthProvider>
  )
}

export default App
