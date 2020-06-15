import { Coords } from 'google-map-react'

let map: google.maps.Map<HTMLElement>

class GoogleService {
  public setMap(mapParam: google.maps.Map<HTMLElement>): void {
    map = mapParam
  }

  public createRouteForClosestHospital() {
    this.findClosestHospital(this.createDirectionsFor)
  }

  private createDirectionsFor(coord: Coords) {
    const directionRequest = {
      destination: coord,
      origin: map.getCenter(),
      travelMode: google.maps.TravelMode.DRIVING,
      drivingOptions: {
        departureTime: new Date(2020, 6, 15),
      },
    }
    const service = new google.maps.DirectionsService()
    const render = new google.maps.DirectionsRenderer({ markerOptions: { visible: false } })
    service.route(directionRequest, directionResult => {
      render.setMap(map)
      render.setDirections(directionResult)
    })
  }

  private findClosestHospital(callback: (coord: Coords) => void) {
    const request: google.maps.places.PlaceSearchRequest = {
      openNow: true,
      rankBy: google.maps.places.RankBy.DISTANCE,
      location: map.getCenter(),
      type: 'hospital',
    }

    const service = new google.maps.places.PlacesService(map)

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const healthOnes = results.filter(r => r.types && r.types.includes('hospital'))
        const closest = healthOnes[0].geometry!!.location
        const coords = { lat: closest.lat(), lng: closest.lng() }
        callback(coords)
      }
    })
  }
}

export const googleService = new GoogleService()
