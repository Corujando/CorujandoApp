import { User } from '../model/user'
import { BaseService } from './base.service'

export class UserService extends BaseService {
  PATH = 'user'

  get(email: string): Promise<User | null> {
    return this.getUniqueWhereEqualTo('email', email).then(({ empty, docs }) => {
      if (empty) {
        return null
      }
      const data = docs[0].data()
      return {
        id: docs[0].id,
        name: data.name,
        email: data.email,
        photoUrl: data.photoUrl,
        badges: data.badges,
      }
    })
  }

  add(name: string, email: string, photoUrl: string): Promise<String> {
    return this.addToCollection({ name, email, photoUrl }).then(ref => ref.id)
  }
}
