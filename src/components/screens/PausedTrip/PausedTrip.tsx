import React from 'react'
import './PausedTrip.scss'

export function PausedTrip() {
  return (
    <div className='PausedTrip'>
      <h1 className='Title'>Bom <br/> descanso!</h1>
      <h3 className='SubTitle'>Aproveite seu período de descanso <br/> :)</h3>
      <h4 className='DistanceTitle'>Distância restante até o destino:</h4>
      <h2 className='Distance'>536 km</h2>
      <button className='BackTripButton'>Voltar para viagem</button>
    </div>
  )
}