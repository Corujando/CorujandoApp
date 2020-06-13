export interface Break {
    id: string,
    tripId: string,
    placeId: string,
    finalTime: firebase.firestore.Timestamp,
    initialTime: firebase.firestore.Timestamp,
    status: string
}