import { Input, InputProps } from '@material-ui/core'
import React, { ChangeEvent, useState } from 'react'
import ReactGoogleMapLoader from 'react-google-maps-loader'
import ReactGooglePlacesSuggest from 'react-google-places-suggest'
import { Keys } from '../../../config/Keys'

interface CRPlacesInputProps extends InputProps {
  onInputChange: (value: string) => void
  onPlaceSelected: (
    geocodedPrediction: google.maps.GeocoderResult,
    originalPrediction: google.maps.places.AutocompletePrediction,
  ) => void
}

export function CRPlacesInput({
  onInputChange,
  onPlaceSelected,
  ...inputProps
}: CRPlacesInputProps) {
  const mapConfig = { key: Keys.MAPS_KEY, libraries: 'places, geocode' }
  const [search, setSearch] = useState((inputProps.value as string) || '')
  const request = { input: search, componentRestrictions: { country: ['br'] } }

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value)
    if (onInputChange) onInputChange(target.value)
  }

  const handleSelectSuggest = (
    geocodedPrediction: google.maps.GeocoderResult,
    originalPrediction: google.maps.places.AutocompletePrediction,
  ) => {
    setSearch('')
    if (onPlaceSelected) onPlaceSelected(geocodedPrediction, originalPrediction)
  }

  function render(googleMaps: typeof google.maps) {
    return (
      googleMaps && (
        <ReactGooglePlacesSuggest
          googleMaps={googleMaps}
          autocompletionRequest={request}
          onSelectSuggest={handleSelectSuggest}
          textNoResults="Nenhum resultado encontrado">
          <Input className="CRPlacesInput" onChange={handleInputChange} {...inputProps} />
        </ReactGooglePlacesSuggest>
      )
    )
  }

  return <ReactGoogleMapLoader params={mapConfig} render={render} />
}
