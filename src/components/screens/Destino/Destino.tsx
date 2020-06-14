import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Paths } from '../../../config/Paths'
import { CRFooter } from '../../generics/CRFooter/CRFooter'
import { CRPlacesInput } from '../../generics/CRPlacesInput/CRPlacesInput'
import { CRPopUp } from '../../generics/CRPopUp/CRPopUp'
import './Destino.scss'
import { navigationService } from '../../../services/navigationService'

const UF_GOOGLE_ID = 'administrative_area_level_1'

export function Destino() {
  const history = useHistory()

  const [inputValue, setInputValue] = useState('')
  const [strippedText, setStrippedText] = useState(inputValue)

  function onPlaceSelected(
    geocoded: google.maps.GeocoderResult,
    prediction: google.maps.places.AutocompletePrediction,
  ): void {
    setInputValue(prediction.description)
    const uf = geocoded.address_components.find(c => c.types.includes(UF_GOOGLE_ID))!!.short_name
    const text = `${prediction.structured_formatting.main_text} - ${uf}`
    setStrippedText(text)
    navigationService.saveUserDestiny(geocoded, text)
  }

  function startTrip() {
    history.push(Paths.TRIP_QUERY + strippedText)
  }

  return (
    <div className="Destino">
      <CRPopUp
        title="Destino"
        onClickSecondaryButton={startTrip}
        titleSecondaryButton="Iniciar viagem"
        subTitle="Por favor, insira a cidade de destino">
        <div className="Destino__content">
          <CRPlacesInput
            placeholder="Cidade"
            value={inputValue}
            onInputChange={value => setInputValue(value)}
            onPlaceSelected={onPlaceSelected}
          />
        </div>
      </CRPopUp>
      <CRFooter />
    </div>
  )
}
