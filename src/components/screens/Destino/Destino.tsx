import React, { useState } from 'react'
import { CRPopUp } from '../../generics/CRPopUp/CRPopUp'

import './Destino.scss'
import { CRPlacesInput } from '../../generics/CRPlacesInput/CRPlacesInput'
import { CRFooter } from '../../generics/CRFooter/CRFooter'

const UF_GOOGLE_ID = 'administrative_area_level_1'

export function Destino() {
  const [inputValue, setInputValue] = useState('')
  const [strippedText, setStrippedText] = useState(inputValue)

  function onPlaceSelected(
    geocoded: google.maps.GeocoderResult,
    prediction: google.maps.places.AutocompletePrediction,
  ): void {
    setInputValue(prediction.description)
    const uf = geocoded.address_components.find(c => c.types.includes(UF_GOOGLE_ID))!!.short_name
    setStrippedText(`${prediction.structured_formatting.main_text} - ${uf}`)
  }

  return (
    <div className="Destino">
      <CRPopUp
        title="Destino"
        onClickSecondaryButton={() => {}}
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
