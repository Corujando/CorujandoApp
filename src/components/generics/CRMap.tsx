import GoogleMapReact, { Coords } from 'google-map-react'
import React from 'react'

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
	zoom: number
	marker: Marker
	MarkerComponent: MarkerComponent
	places?: Coords[]
}

export function CRMap({ center, marker, zoom, MarkerComponent, places }: CRMapProps) {
	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				yesIWantToUseGoogleMapApiInternals
				onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
				bootstrapURLKeys={{ key: 'AIzaSyAtzw24zSFr-hVB8g0IGQBstCnSbnPp6NM' }}
				defaultCenter={{ lat: -30.0925399, lng: -51.1758782 }}
				center={center}
				defaultZoom={zoom}>
				<MarkerComponent {...marker} />
			</GoogleMapReact>
		</div>
	)
}
