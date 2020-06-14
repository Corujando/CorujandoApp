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
  nightMode?: boolean
}

let map: google.maps.Map<HTMLElement>
const nightModeStyles: google.maps.MapTypeStyle[] = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
]

export function CRMap({ center, zoom, place, nightMode }: CRMapProps) {
  useEffect(initMap)

  function initMap() {
    const defaultCenter = new google.maps.LatLng(-30.056, -51.1622)
    const mapProps: google.maps.MapOptions = {
      center: center || place || defaultCenter,
      zoom: zoom || 15,
      streetViewControl: false,
      zoomControl: false,
    }

    if (nightMode) mapProps.styles = nightModeStyles
    map = new google.maps.Map(document.getElementById('map')!!, mapProps)
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
