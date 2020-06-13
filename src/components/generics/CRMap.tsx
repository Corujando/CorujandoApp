import GoogleMapReact, { Coords } from 'google-map-react'
import React from 'react'

export type MarkerComponent = (props: Marker) => JSX.Element

export interface Marker {
	lat: number
	lng: number
	htmlColor?: string
	style?: Partial<CSSStyleDeclaration>
}

interface CRMapProps {
	center?: Coords
	zoom: number
	marker: Marker
	MarkerComponent: MarkerComponent
}

export function CRMap({ center, marker, zoom, MarkerComponent }: CRMapProps) {
	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyAtzw24zSFr-hVB8g0IGQBstCnSbnPp6NM' }}
				defaultCenter={{ lat: -30.0925399, lng: -51.1758782 }}
				center={center}
				defaultZoom={zoom}>
				<MarkerComponent {...marker} />
			</GoogleMapReact>
		</div>
	)
}
