import { Coords } from 'google-map-react'
import React, { useEffect } from 'react'
import icon from '../../../assets/icone.png'

export type MarkerComponent = (props: Marker) => JSX.Element

export interface Marker {
  lat: number
  lng: number
  htmlColor?: string
  style?: Partial<CSSStyleDeclaration>
}

const getMapBounds = (maps: any, places: Coords[]): any => {
  const bounds = new maps.LatLngBounds()
  places.forEach(place => {
    bounds.extend(new maps.LatLng(place.lat, place.lng))
  })
  return bounds
}

const bindResizeListener = (map: any, maps: any, bounds: any) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds)
    })
  })
}

const apiIsLoaded = (map: any, maps: any, places: Coords[] | undefined) => {
  if (!places || !places.length) return
  const bounds = getMapBounds(maps, places)
  map.fitBounds(bounds)
  bindResizeListener(map, maps, bounds)
}

interface CRMapProps {
  center?: Coords
  zoom?: number
  place: google.maps.LatLng
}

let map: google.maps.Map<HTMLElement>
let marker: google.maps.Marker

export function CRMap({ center, zoom, place }: CRMapProps) {
  useEffect(initMap)

  function initMap() {
    const defaultCenter = new google.maps.LatLng(-30.056, -51.1622)
    map = new google.maps.Map(document.getElementById('map')!!, {
      center: center || defaultCenter,
      zoom: zoom || 15,
    })

    createMarker()
  }

  function createMarker() {
    marker = new google.maps.Marker({
      map,
      position: place,
      icon,
    })
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <div style={{ height: '100%' }} id="map" />
    </div>
  )
}
