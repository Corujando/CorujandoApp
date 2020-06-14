import { FirebaseAuthProvider } from '@react-firebase/auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.scss'
import { Destino } from './components/screens/Destino/Destino'
import { Home } from './components/screens/Home/Home'
import { Login } from './components/screens/Login/Login'
import { Health } from './components/screens/Health/Health'
import { Article } from './components/screens/Article/Article' 
import firebaseConfig from './config/FirebaseConfig'
import { Paths } from './config/Paths'
import { Trip } from './components/screens/Trip/Trip'
import { FinishedTrip } from './components/screens/FinishedTrip/FinishedTrip';
import { BadgeScreen } from './components/screens/Badges/Badges';


function App() {
  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <BrowserRouter>
        <Switch>
          <Route exact path={Paths.LOGIN} component={Login} />
          <Route exact path={Paths.FINISHED_TRIP} component={FinishedTrip} />
          <Route exact path={Paths.DESTINY} component={Destino} />
<<<<<<< HEAD
          <Route exact path={Paths.HEALTH} component={Health} />
          <Route exact path={Paths.ARTICLE} component={Article} />
=======
          <Route exact path={Paths.BADGES} component={BadgeScreen} />
          <Route exact path={Paths.TRIP} component={Trip} />
>>>>>>> d81d4dea0c3a764f51b08624d1a20ae7fb28f811
          <Route path={Paths.HOME} component={Home} />
          <Redirect to={Paths.HOME} />
        </Switch>
      </BrowserRouter>
    </FirebaseAuthProvider>
  )
}

export default App
