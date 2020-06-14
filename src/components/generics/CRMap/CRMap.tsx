import React, { useEffect } from 'react'
import icon from '../../../assets/icone.png'
import { googleService } from '../../../services/googleService'

export type MarkerComponent = (props: Marker) => JSX.Element

export interface Marker {
  lat: number
  lng: number
  htmlColor?: string
  style?: Partial<CSSStyleDeclaration>
}

interface CRMapProps {
  center?: google.maps.LatLng
  zoom?: number
  place: google.maps.LatLng
}

let map: google.maps.Map<HTMLElement>

export function CRMap({ center, zoom, place }: CRMapProps) {
  useEffect(initMap)

  function initMap() {
    const defaultCenter = new google.maps.LatLng(-30.056, -51.1622)
    map = new google.maps.Map(document.getElementById('map')!!, {
      center: center || defaultCenter,
      zoom: zoom || 15,
      streetViewControl: false,
      zoomControl: false,
    })
    googleService.setMap(map)
    createMarker()
  }

  function createMarker() {
    // eslint-disable-next-line
    const marker = new google.maps.Marker({
      map,
      position: place,
      icon,
    })
  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={{ height: '100%' }} id="map" />
    </div>
  )
}
