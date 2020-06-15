import React from 'react'
import { useHistory, useParams } from 'react-router'
import logo from '../../../assets/jojo-horizontal.png'
import { Paths } from '../../../config/Paths'
import { navigationService } from '../../../services/navigationService'
import './PausedTrip.scss'

interface PausedTripParams {
  time: string
}

export function PausedTrip() {
  const { time } = useParams<PausedTripParams>()
  const history = useHistory()

  function handleBackTripClick() {
    history.push(`${Paths.TRIP_QUERY}${navigationService.getUserDestinyText()}/${time}`)
  }

  function handleMyTrips() {
    history.push(Paths.MY_TRIPS)
  }

  function renderDistance() {
    return <h2 className="Distance">536 km</h2>
  }

  return (
    <div className="PausedTrip">
      <h1 className="Title">
        Bom <br /> descanso!
      </h1>
      <h3 className="SubTitle">
        Aproveite seu período de descanso <br /> :)
      </h3>
      <h4 className="DistanceTitle">Distância restante até o destino:</h4>
      {renderDistance()}
      <button type="button" className="BackTripButton" onClick={handleBackTripClick}>
        Voltar para viagem
      </button>
      <button type="button" className="FinishTripButton" onClick={handleMyTrips}>
        Histórico de viagens
      </button>
      <img className="Logo" src={logo} alt="Logo" />
    </div>
  )
}
