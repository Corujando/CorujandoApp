import * as firebase from 'firebase'

export enum Status {
  FINISHED = 'FINISHED',
  PAUSED = 'PAUSED',
  IN_PROGRESS = 'IN_PROGRESS',
}

export interface Trip {
  id?: string
  userId: string
  distance: number
  destiny: string
  finalLocation: firebase.firestore.GeoPoint
  initialLocation: firebase.firestore.GeoPoint
  finalTime?: firebase.firestore.Timestamp
  initialTime?: firebase.firestore.Timestamp
  time?: string // duracao
  status: Status
}
