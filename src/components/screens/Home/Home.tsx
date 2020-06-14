import { Avatar } from '@material-ui/core'
import { FirebaseAuthConsumer } from '@react-firebase/auth'
import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { Paths } from '../../../config/Paths'
import { CRButton } from '../../generics/CRButton/CRButton'
import { CRFooter } from '../../generics/CRFooter/CRFooter'
import CRSignOutButton from '../../generics/CRSignOutButton/CRSignOutButton'
import './Home.scss'

export function Home() {
  const history = useHistory()

  function isFirebaseObjectLoaded(firebase: any) {
    return Object.keys(firebase).length !== 0
  }

  function handleHealthClick() {}

  function handleHistoryClick() {}

  function handleAchievementsClick() {}

  function handleAboutClick() {}

  function handleStartTripClick() {
    history.push(Paths.DESTINY)
  }

  function renderComponent(user: any): JSX.Element {
    return (
      <div className="Home">
        <div className="HomeHeader">
          <p className="HelloText">Bom dia, {user.displayName}!</p>
          <Avatar alt="Foto perfil" src={user.photoURL} />
        </div>
        <div className="HomeMenu">
          <CRButton className="HomeInitButton" onClick={handleStartTripClick}>
            Iniciar nova viagem
          </CRButton>
          <CRButton onClick={handleHealthClick}>Minha saúde</CRButton>
          <CRButton onClick={handleHistoryClick}>Histórico de viagens</CRButton>
          <CRButton onClick={handleAchievementsClick}>Minhas conquistas</CRButton>
          <CRButton onClick={handleAboutClick}>Sobre o APP</CRButton>
          <CRSignOutButton className="HomeSignOutButton">Sair do app</CRSignOutButton>
        </div>
        <CRFooter />
      </div>
    )
  }

  return (
    <>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, firebase }) => {
          if (!isSignedIn) {
            return isFirebaseObjectLoaded(firebase) ? <Redirect to={Paths.LOGIN} /> : null
          }

          return renderComponent(user)
        }}
      </FirebaseAuthConsumer>
    </>
  )
}
