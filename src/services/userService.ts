import { User } from '../model/user'
import { BaseService } from './base.service'
let loggedUser: string | undefined

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
        badges: data.badges || [],
      }
    })
  }

  async add(name: string, email: string, photoUrl: string): Promise<String> {
    const userId = await this.addToCollection({ name, email, photoUrl }).then(ref => ref.id)
    loggedUser = userId
    return userId
  }

  getLoggedUserId(): string | undefined {
    return loggedUser
  }

  setLoogedUser(id: string) {
    loggedUser = id
  }
}
