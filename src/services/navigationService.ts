import { Coords } from 'google-map-react'

export type UserPosition = google.maps.LatLng | null
class NavigationService {
  private position: Position | undefined
  private destiny: UserPosition | undefined

  public saveCurrentLocation(callBack: (position: UserPosition) => void) {
    navigator.geolocation.getCurrentPosition(position => {
      this.saveUserLocation(position)
      callBack(this.getUserPosition())
    })
  }

  public saveUserDestiny(geocoded: google.maps.GeocoderResult) {
    localStorage.setItem('destiny', JSON.stringify(geocoded.geometry.location))
  }

  public getUserDestiny(): Coords | null {
    const fromLocalStorage = localStorage.getItem('destiny') || null
    const localWindow = window as any
    localWindow.abc = fromLocalStorage
    return fromLocalStorage ? (JSON.parse(fromLocalStorage) as Coords) : null
  }

  public getUserPosition(): google.maps.LatLng | null {
    if (!this.position) return null
    const { latitude, longitude } = this.position.coords
    return new google.maps.LatLng({ lat: latitude, lng: longitude })
  }

  private saveUserLocation(positionParam: Position) {
    this.position = positionParam
  }
}

export const navigationService = new NavigationService()
