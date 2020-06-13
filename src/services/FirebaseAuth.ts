import * as firebase from 'firebase/app'
import firebaseConfig from '../config/FirebaseConfig'
import 'firebase/auth'
import 'firebase/analytics'

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const firebaseAppAuth = firebaseApp.auth()

export const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
  emailProvider: new firebase.auth.EmailAuthProvider(),
}
