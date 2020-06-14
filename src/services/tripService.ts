import { Trip } from '../model/trip'
import { BaseService } from './base.service'

export class TripService extends BaseService {
  PATH = 'trip'

  async add(trip: Trip): Promise<String> {
    console.log(trip)
    return this.addToCollection(trip).then(ref => ref.id)
  }

  async getWhereEqualToUserId(userId: string): Promise<Trip[]> {
    const queryResult = await this.getWhereEqualTo('userId', userId)

    const docs = queryResult.docs

    const trips = docs.map(doc => doc.data() as Trip)

    return trips
  }
}
