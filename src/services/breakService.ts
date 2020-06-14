import { BaseService } from './base.service'
import { Status } from '../model/trip'
import * as firebase from 'firebase'
import { Break } from '../model/break'

export class BreakService extends BaseService {
  protected PATH: string = 'break'

  public async finishInProgressBreak(tripId: string) {
    const breakItem = await this.firestore
      .collection(this.PATH)
      .where('tripId', '==', tripId)
      .where('status', '==', Status.IN_PROGRESS)
      .limit(1)
      .get()
    if (breakItem.docs[0]) {
      return breakItem.docs[0].ref.set(
        {
          status: Status.FINISHED,
          finalTime: firebase.firestore.Timestamp.now(),
        },
        { merge: true },
      )
    }
  }

  public async saveNewBreak(tripId: string, location: google.maps.LatLng) {
    const breakModel: Partial<Break> = {
      initialTime: firebase.firestore.Timestamp.now(),
      place: new firebase.firestore.GeoPoint(location.lat(), location.lng()),
      status: Status.IN_PROGRESS,
      tripId,
    }
    return this.addToCollection(breakModel)
  }
}
