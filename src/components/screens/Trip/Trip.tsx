import React, { useState } from 'react'
import CloseButton from '../../../assets/close_menu.png'
import EmergencySymbol from '../../../assets/emergency_button.png'
import MenuButton from '../../../assets/open_menu.png'
import { CRButton } from '../../generics/CRButton/CRButton'
import { CRMap } from '../../generics/CRMap/CRMap'
import './Trip.scss'

export interface TripProps {
  location: string
}

export function Trip(props: TripProps) {
  const [openMenu, setOpenMenu] = useState(false)

  function handleCloseMenuClick() {
    setOpenMenu(false)
  }

  function handleOpenMenuClick() {
    setOpenMenu(true)
  }

  function handleHealthClick() {}

  function handleHistoryClick() {}

  function handleAchievementsClick() {}

  function renderMap() {
    return <CRMap zoom={12} place={new google.maps.LatLng({ lat: -30.056, lng: -51.1622 })} />
  }

  function renderHeader() {
    return (
      <>
        <div className="TripHeaderLocation">
          <div className="TripHeaderLocationTitle">Nosso destino é</div>
          <div className="TripHeaderLocationName">{props.location}</div>
        </div>
        <div className="TripHeaderImageContainer">
          {openMenu ? (
            <button
              type="submit"
              className="TripHeaderCloseMenuButton"
              onClick={handleCloseMenuClick}>
              <img src={CloseButton} alt="Fechar menu." />
            </button>
          ) : (
            <button
              type="submit"
              className="TripHeaderOpenMenuButton"
              onClick={handleOpenMenuClick}>
              <img src={MenuButton} alt="Abrir menu." />
            </button>
          )}
        </div>
      </>
    )
  }

  function renderMenu() {
    return (
      <>
        <div className="TripMenuOptions">
          <CRButton className="TripMenuOptionButton" onClick={handleHealthClick}>
            Minha saúde
          </CRButton>
          <CRButton className="TripMenuOptionButton" onClick={handleHistoryClick}>
            Histórico de viagens
          </CRButton>
          <CRButton className="TripMenuOptionButton" onClick={handleAchievementsClick}>
            Minhas conquistas
          </CRButton>
        </div>
        <div className="TripBar" />
        <div className="TripOptions">
          <CRButton className="TripOptionButton" onClick={handleHealthClick}>
            Fazer parada
          </CRButton>
          <CRButton className="TripOptionButton" onClick={handleHistoryClick}>
            Finalizar viagem
          </CRButton>
        </div>
        <button type="submit" className="TripHelp" onClick={handleHistoryClick}>
          <img src={EmergencySymbol} alt="Botão de Emergência" />
          <p className="TripHelpText">Preciso de Ajuda</p>
        </button>
      </>
    )
  }

  return (
    <div className="Trip">
      <div className="TripHeader">{renderHeader()}</div>
      <div className="TripMap">{renderMap()}</div>
      {openMenu && <div className="TripMenu">{renderMenu()}</div>}
    </div>
  )
}
