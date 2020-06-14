export type UserPosition = google.maps.LatLng | null
class NavigationService {
  private position: Position | undefined

  public saveCurrentLocation(callBack: (position: UserPosition) => void) {
    navigator.geolocation.getCurrentPosition(position => {
      this.saveUserLocation(position)
      callBack(this.getUserPosition())
    })
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
