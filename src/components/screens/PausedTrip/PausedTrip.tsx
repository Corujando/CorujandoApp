import React from 'react'
import './PausedTrip.scss'
import logo from '../../../assets/jojo-horizontal.png'

export function PausedTrip() {

  function handleBackTripClick() {

  }

  function handleFinishTripClick() {

  }

  function renderDistance() {
      return (
        <h2 className='Distance'>536 km</h2>
      )
  }

  return (
    <div className='PausedTrip'>
      <h1 className='Title'>Bom <br/> descanso!</h1>
      <h3 className='SubTitle'>Aproveite seu período de descanso <br/> :)</h3>
      <h4 className='DistanceTitle'>Distância restante até o destino:</h4>
      {renderDistance()}
      <button className='BackTripButton' onClick={handleBackTripClick}>Voltar para viagem</button>
      <button className='FinishTripButton' onClick={handleFinishTripClick}>Histórico de viagens</button>
      <img className='Logo' src={logo} alt="Logo"/>
    </div>
  )
}