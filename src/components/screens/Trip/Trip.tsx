import { Fab } from '@material-ui/core'
import * as firebase from 'firebase'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import CloseButton from '../../../assets/close_menu.png'
import EmergencySymbol from '../../../assets/emergency_button.png'
import EmergencySymbolLarge from '../../../assets/emergency_button_large.png'
import jojoScared from '../../../assets/jojo-assustado.png'
import jojoCoffee from '../../../assets/jojo-coffee.png'
import jojoSleepy from '../../../assets/jojo-sleepy.png'
import MenuButton from '../../../assets/open_menu.png'
import { Paths } from '../../../config/Paths'
import { Status, Trip as TripModel } from '../../../model/trip'
import { BreakService } from '../../../services/breakService'
import { googleService } from '../../../services/googleService'
import { navigationService, UserPosition } from '../../../services/navigationService'
import { TripService } from '../../../services/tripService'
import { UserService } from '../../../services/userService'
import { CRButton } from '../../generics/CRButton/CRButton'
import { CRMap } from '../../generics/CRMap/CRMap'
import { CRPopUp } from '../../generics/CRPopUp/CRPopUp'
import { Timer } from '../../sections'
import { TimerHook } from '../../sections/Timer/Timer'

import './Trip.scss'

const NIGHT_TIME = 20

function isNightTime() {
  return getHour() >= NIGHT_TIME || getHour() < 6
}

function getHour(): number {
  return Number(new Date().toTimeString().substring(0, 2))
}

interface TripParams {
  destiny: string
  time?: string
}

let tripId: string | undefined

export function Trip() {
  const tripService = new TripService()
  const breakService = new BreakService()
  const history = useHistory()
  const { destiny, time } = useParams<TripParams>()

  const [openMenu, setOpenMenu] = useState(false)
  const [hour, setHour] = useState(getHour())
  const [openTimerMenu, setOpenTimerMenu] = useState(false)
  const [showHelpModal, setShowHelpModal] = useState(false)
  const [showRestModal, setShowRestModal] = useState(false)
  const [showSleepModal, setShowSleepModal] = useState(false)
  const [userPosition, setUserPosition] = useState<UserPosition>(null)

  useEffect(() => {
    navigationService.saveCurrentLocation(location => {
      setUserPosition(location)
      saveTrip(location)
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (getHour() !== hour) setHour(getHour())
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  async function saveTrip(location: UserPosition) {
    const trip: TripModel = {
      distance: 1500,
      finalLocation: new firebase.firestore.GeoPoint(
        navigationService.getUserDestiny()!!.lat,
        navigationService.getUserDestiny()!!.lng,
      ),
      initialLocation: new firebase.firestore.GeoPoint(location!!.lat(), location!!.lng()),
      status: Status.PAUSED,
      userId: new UserService().getLoggedUserId()!!,
      destiny,
    }

    tripId = (await tripService.add(trip)) as string
  }

  function handleCloseMenuClick() {
    setOpenMenu(false)
  }

  function handleOpenMenuClick() {
    setOpenMenu(true)
    setOpenTimerMenu(false)
  }

  function handleTripTimerButtonClick() {
    setOpenTimerMenu(!openTimerMenu)
    if (!openTimerMenu) {
      setOpenMenu(false)
    }
  }

  function handleHealthClick() {}

  function handleHistoryClick() {}

  function handleAchievementsClick() {}

  function handleStopButtonClick() {}

  function handleFinishTripButtonClick() {
    history.push(Paths.FINISHED_TRIP)
  }

  function handleHelperClick() {
    setShowHelpModal(true)
    setOpenTimerMenu(false)
    setOpenMenu(false)
  }

  function renderHelperButton(): JSX.Element {
    return (
      <button type="submit" className="TripHelp" onClick={handleHelperClick}>
        <img src={EmergencySymbol} alt="Botão de Emergência" />
        <p className="TripHelpText">Preciso de Ajuda</p>
      </button>
    )
  }

  function renderFloatingButton() {
    return (
      <Fab className="FloatingButton" onClick={handleHelperClick}>
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
        onClickPrimaryButton={() => {
          googleService.createRouteForClosestHospital()
          setShowHelpModal(false)
        }}
        onClickSecondaryButton={() => setShowHelpModal(false)}
      />
    )
  }

  function renderRestModal() {
    return (
      <CRPopUp
        faded
        className="PausaDescanso"
        image={jojoCoffee}
        title="Pausa pro descanso?"
        subTitle="Você está perto de completar 5h30 de viagem e estamos chegando em um ponto de descanso, que tal uma pausa?"
        titlePrimaryButton="Fazer parada"
        titleSecondaryButton="Lembrar na próxima parada"
        onClickPrimaryButton={() => {
          onPauseClicked(Number(time))
          setShowRestModal(false)
        }}
        onClickSecondaryButton={() => setShowRestModal(false)}
      />
    )
  }

  function renderSleepModal() {
    return (
      <CRPopUp
        faded
        className="PausaDescanso"
        image={jojoSleepy}
        title="Pausa pro dormir?"
        subTitle="Você está perto de completar 5h30 de viagem e já está tarde. O que acha de parar para dormir no próximo posto descanso?"
        titlePrimaryButton="Fazer parada"
        titleSecondaryButton="Lembrar na próxima parada"
        onClickPrimaryButton={() => {}}
        onClickSecondaryButton={() => setShowSleepModal(false)}
      />
    )
  }

  function renderMap() {
    return userPosition && <CRMap nightMode={isNightTime()} zoom={16} place={userPosition} />
  }

  function renderHeader(): JSX.Element {
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

  function renderMenu(): JSX.Element {
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
          <CRButton className="TripOptionButton" onClick={handleStopButtonClick}>
            Fazer parada
          </CRButton>
          <CRButton className="TripOptionButton" onClick={handleFinishTripButtonClick}>
            Finalizar viagem
          </CRButton>
        </div>
        {renderHelperButton()}
      </>
    )
  }

  function getTimerHooks(): TimerHook[] {
    const isNight = isNightTime()
    return [
      {
        callback: () => !isNight && setShowRestModal(true),
        offset: 15 * 60, // 25 minutos
        targetTime: 19800, // 5 horas e meia
      },
      {
        callback: () => isNight && setShowSleepModal(true),
        offset: 15 * 60, // 25 minutos
        targetTime: 19800, // 5 horas e meia
      },
    ]
  }

  async function onPlayClicked() {
    tripService.setStatusInProgress(tripId!!)
    breakService.finishInProgressBreak(tripId!!)
  }

  async function onPauseClicked(timeParam: number) {
    tripService.setStatusPaused(tripId!!)
    navigationService.saveCurrentLocation(location => {
      breakService.saveNewBreak(tripId!!, location!!)
    })
    history.push(`${Paths.PAUSED_TRIP}/${timeParam}`)
  }

  function renderTimer(): JSX.Element {
    return (
      <>
        <button
          type="button"
          className="TripTimerOpenButton"
          onClick={handleTripTimerButtonClick}
        />
        <div className="TripTimerData">
          <Timer
            initialTime={Number(time)}
            hooks={getTimerHooks()}
            onPlayClick={onPlayClicked}
            onPauseClick={onPauseClicked}
          />
          {openTimerMenu && renderTimerMenuInfo()}
        </div>
      </>
    )
  }

  function renderTimerMenuInfo(): JSX.Element {
    return (
      <>
        <div className="TripTimerInfo">
          <div className="TripInfoTitle">
            <p>Total de paradas</p>
            <p>Tempo desde a última parada</p>
            <p>Total do trajeto (em KM)</p>
          </div>
          <div className="TripInfoValue">
            <p>0 paradas</p>
            <p>00:00:00</p>
            <p>1.791 KM</p>
          </div>
        </div>
        <CRButton className="FinishTripButton" onClick={handleFinishTripButtonClick}>
          Finalizar viagem
        </CRButton>
        {renderHelperButton()}
      </>
    )
  }

  return (
    <div className="Trip">
      <div className="TripHeader">{renderHeader()}</div>
      <div className="TripMap">{renderMap()}</div>
      {renderFloatingButton()}
      {showHelpModal && renderHelpModal()}
      {showRestModal && renderRestModal()}
      {showSleepModal && renderSleepModal()}
      {openMenu && <div className="TripMenu">{renderMenu()}</div>}
      <div className={openTimerMenu ? 'TripTimer Open' : 'TripTimer'}>{renderTimer()}</div>
    </div>
  )
}
