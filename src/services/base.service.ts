import { firestore } from 'firebase/app'

export abstract class BaseService {
  protected abstract PATH: string

  protected firestore = firestore()

  public getDocumentFromId(id: string) {
    return this.firestore.collection(this.PATH).doc(id).get()
  }

  protected getAll(): Promise<firestore.QuerySnapshot<firestore.DocumentData>> {
    return this.firestore.collection(this.PATH).get()
  }

  protected getWhereEqualTo(
    field: string | firestore.FieldPath,
    value: any,
  ): Promise<firestore.QuerySnapshot<firestore.DocumentData>> {
    return this.firestore.collection(this.PATH).where(field, '==', value).get()
  }

  public getUniqueWhereEqualTo(
    field: string | firestore.FieldPath,
    value: any,
  ): Promise<firestore.QuerySnapshot<firestore.DocumentData>> {
    return this.firestore.collection(this.PATH).where(field, '==', value).limit(1).get()
  }

  protected addToCollection(
    data: firestore.DocumentData,
  ): Promise<firestore.DocumentReference<firestore.DocumentData>> {
    return this.firestore.collection(this.PATH).add(data)
  }
}
