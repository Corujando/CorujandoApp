import { Trip } from '../model/trip'
import { BaseService } from './base.service'

export class TripService extends BaseService {
  PATH = 'trip'

  async add(trip: Trip): Promise<String> {
    return this.addToCollection(trip).then(ref => ref.id)
  }
}
