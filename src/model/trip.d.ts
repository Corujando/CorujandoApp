import * as firebase from 'firebase'

export interface Trip {
  id: string
  userId: string
  distance: number
  finalLocation: firebase.firestore.GeoPoint
  initialLocation: firebase.firestore.GeoPoint
  finalTime: firebase.firestore.Timestamp
  initialTime: firebase.firestore.Timestamp
  time: string
  status: string
}
