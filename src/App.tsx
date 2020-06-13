import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Paths from './config/Paths'
import firebaseConfig from './config/FirebaseConfig'
import Login from './components/screens/Login'
import { Home } from './components/screens/Home/Home'
import { FirebaseAuthProvider } from '@react-firebase/auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import './App.scss'

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
