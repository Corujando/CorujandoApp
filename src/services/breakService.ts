import * as firebase from 'firebase'
import { Break } from '../model/break'
import { Status } from '../model/trip'
import { BaseService } from './base.service'

export class BreakService extends BaseService {
  protected PATH: string = 'break'

  public async finishInProgressBreak(tripId: string): Promise<void> {
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

    return Promise.resolve()
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

  public async getWhereEqualToTripId(tripId: string): Promise<Break[]> {
    const queryResult = await this.getWhereEqualTo('tripId', tripId)

    // eslint-disable-next-line
    const docs = queryResult.docs

    const breaks = docs.map(
      doc =>
        ({
          ...doc.data(),
          id: doc.id,
        } as Break),
    )

    return breaks
  }
}
