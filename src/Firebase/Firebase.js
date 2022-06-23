import { app } from './FirebaseInit';
import { getFirestore, collection, addDoc, query, where, orderBy,
  onSnapshot } from "firebase/firestore";

import {
    getAuth
} from 'firebase/auth';
const db = getFirestore(app);

export const auth = getAuth();


// Funcion que crea pedidos es Firestore
export function uploadOrder(clientOrder) {
    const user = auth.currentUser;
    return addDoc(collection(db, 'orders'), {
      ...clientOrder,
      waiterId: user.uid
    });
  }

  export async function ordersByStatus(status) {
    const postsRef = collection(db, 'orders');
    const q = query(postsRef, where('status', '==', status), orderBy('date', 'desc'));
    //return onSnapshot(q, (snapshot) =>  console.log(snapshot));
    const snapShot = onSnapshot(q, (snapshot) => console.log(snapshot.docs));
    return snapShot;

  }