import {
    getAuth, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc, query, orderBy,
  onSnapshot, setDoc, doc} from "firebase/firestore";

export {
    getAuth, signInWithEmailAndPassword, signOut,
    getFirestore, collection, addDoc, query, orderBy,
    onSnapshot, setDoc, doc
}