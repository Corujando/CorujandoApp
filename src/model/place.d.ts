import * as firebase from 'firebase';

export interface Place {
    id: string,
    location: firebase.firestore.Timestamp
}