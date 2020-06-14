import { Fab } from '@material-ui/core'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CloseButton from '../../../assets/close_menu.png'
import EmergencySymbol from '../../../assets/emergency_button.png'
import EmergencySymbolLarge from '../../../assets/emergency_button_large.png'
import jojoScared from '../../../assets/jojo-assustado.png'
import MenuButton from '../../../assets/open_menu.png'
import { CRButton } from '../../generics/CRButton/CRButton'
import { CRMap } from '../../generics/CRMap/CRMap'
import { CRPopUp } from '../../generics/CRPopUp/CRPopUp'

import './Trip.scss'

interface TripParams {
  destiny: string
}

export function Trip() {
  const { destiny } = useParams<TripParams>()

  const [openMenu, setOpenMenu] = useState(false)
  const [showHelpModal, setShowHelpModal] = useState(false)

  function handleCloseMenuClick() {
    setOpenMenu(false)
  }

  function handleOpenMenuClick() {
    setOpenMenu(true)
  }

  function handleHealthClick() {}

  function handleHistoryClick() {}

  function handleAchievementsClick() {}

  function renderFloatingButton() {
    return (
      <Fab className="FloatingButton" onClick={() => setShowHelpModal(true)}>
        <img src={EmergencySymbolLarge} alt="Botão de Emergência" />
      </Fab>
    )
  }

  function renderHelpModal() {
    return (
      <CRPopUp
        faded={true}
        image={jojoScared}
        title="Precisa de ajuda?"
        subTitle="Se sentindo mal?"
        titlePrimaryButton="Rota para unidade de atendimento mais próxima"
        titleSecondaryButton="Fechar"
        onClickPrimaryButton={() => {}}
        onClickSecondaryButton={() => setShowHelpModal(false)}
      />
    )
  }

  function renderMap() {
    return <CRMap zoom={12} place={new google.maps.LatLng({ lat: -30.056, lng: -51.1622 })} />
  }

  function renderHeader() {
    return (
      <>
        <div className="TripHeaderLocation">
          <div className="TripHeaderLocationTitle">Nosso destino é</div>
          <div className="TripHeaderLocationName">{destiny}</div>
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
      {renderFloatingButton()}
      {showHelpModal && renderHelpModal()}
      {openMenu && <div className="TripMenu">{renderMenu()}</div>}
    </div>
  )
}
