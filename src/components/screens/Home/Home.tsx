import React from 'react'
import { Redirect } from 'react-router-dom'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
import CRSignOutButton from '../../generics/CRSignOutButton/CRSignOutButton'
import Avatar from '@material-ui/core/Avatar'
import { CRButton } from '../../generics'
import logo from '../../../assets/logo.png'
import './Home.scss'


export function Home() {
  function isFirebaseObjectLoaded(firebase: any) {
    return Object.keys(firebase).length !== 0
  }

  function handle

  function renderComponent(user: any): JSX.Element {
    return (
      <div className='Home'>
        <div className='HomeHeader'>
          <p className='HelloText'>Bom dia, {user.displayName}!</p>
          <Avatar alt="Foto perfil" src={user.photoURL} />
        </div>
        <div className='HomeMenu'>
          <CRButton className='HomeInitButton' onClick={() => { }}>Iniciar nova viagem</CRButton>
          <CRButton onClick={() => { }}>Minha saúde</CRButton>
          <CRButton onClick={() => { }}>Histórico de viagens</CRButton>
          <CRButton onClick={() => { }}>Minhas conquistas</CRButton>
          <CRButton onClick={() => { }}>Sobre o APP</CRButton>
          <CRSignOutButton className='HomeSignOutButton'>Sair do app</CRSignOutButton>
        </div>
        <footer className='HomeFooter'>
          <img src={logo} className='HomeLogoImage' alt="Corujando" />
          <p className='HomeLogoText'>CORUJANDO</p>
        </footer>
      </div>
    )
  }

  return (
    <React.Fragment>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, firebase }) => {
          if (!isSignedIn) {
            return isFirebaseObjectLoaded(firebase) ? <Redirect to="/login" /> : null
          } else {
            console.log(user)
            return renderComponent(user)
          }
        }}
      </FirebaseAuthConsumer>
    </React.Fragment>
  )
}

/*
<Switch location={location}>
                <Route path="/" exact component={CRSignOutButton} />
              </Switch>
*/
