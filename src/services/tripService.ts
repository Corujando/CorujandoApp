import { Trip, Status } from '../model/trip'
import { BaseService } from './base.service'
import * as firebase from 'firebase'

export class TripService extends BaseService {
  PATH = 'trip'

  async add(trip: Trip): Promise<String> {
    return this.addToCollection(trip).then(ref => ref.id)
  }

  public async setStatusInProgress(tripId: string) {
    this.setStatus(tripId, Status.IN_PROGRESS)
  }

  public async setStatusPaused(tripId: string) {
    this.setStatus(tripId, Status.PAUSED)
  }

  private async setStatus(tripId: string, status: Status) {
    const changeData: Partial<Trip> = { status }
    const trip = await this.getDocumentFromId(tripId)
    const tripData = trip.data() as Trip
    if (!tripData.initialTime) {
      changeData.initialTime = firebase.firestore.Timestamp.now()
    }
    trip.ref.set(changeData, { merge: true })
  }
}
