export interface Break {
  id: string
  tripId: string
  place: firebase.firestore.GeoPoint
  finalTime: firebase.firestore.Timestamp
  initialTime: firebase.firestore.Timestamp
  status: string
}
