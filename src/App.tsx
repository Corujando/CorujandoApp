import { FirebaseAuthProvider } from '@react-firebase/auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.scss'
import { Destino } from './components/screens/Destino/Destino'
import { Home } from './components/screens/Home/Home'
import { Login } from './components/screens/Login/Login'
import firebaseConfig from './config/FirebaseConfig'
import { Paths } from './config/Paths'
import { Trip } from './components/screens/Trip/Trip'

import { FinishedTrip } from './components/screens/FinishedTrip/FinishedTrip';

function App() {
  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <BrowserRouter>
        <Switch>
          <Route exact path={Paths.LOGIN} component={Login} />
          <Route exact path={Paths.FINISHED_TRIP} component={FinishedTrip}/>
          <Route exact path={Paths.DESTINY} component={Destino} />
          <Route exact path={Paths.TRIP} component={Trip} />
          <Route path={Paths.HOME} component={Home} />
          <Redirect to={Paths.HOME} />
        </Switch>
      </BrowserRouter>
    </FirebaseAuthProvider>
  )
}

export default App
