import { FirebaseAuthProvider } from '@react-firebase/auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.scss'
import { Home } from './components/screens/Home/Home'
import { Login } from './components/screens/Login/Login'
import firebaseConfig from './config/FirebaseConfig'
import Paths from './config/Paths'

function App() {
  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <BrowserRouter>
        <Switch>
          <Route exact path={Paths.LOGIN} component={Login} />
          <Route path={Paths.HOME} component={() => <Trip location='Goiânia - GO' />} />
          <Redirect to={Paths.HOME} />
        </Switch>
      </BrowserRouter>
    </FirebaseAuthProvider>
  )
}

export default App
