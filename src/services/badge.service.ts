import { Badge } from '../model/badge'
import { BaseService } from './base.service'

export class BadgeService extends BaseService {
  PATH = 'badge'

  async getAllBadges() {
    const { empty, docs } = await this.getAll()
    if (empty) {
      return null
    }

    return docs.map(doc => {
      const data = doc.data()

      return {
        id: doc.id,
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
      } as Badge
    })
  }
}
