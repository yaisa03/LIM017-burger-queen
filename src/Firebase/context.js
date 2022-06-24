import { app } from './FirebaseInit';
import React from "react";
import {
    getAuth, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc/* , query, where, orderBy,
  onSnapshot */ } from "firebase/firestore";

const db = getFirestore(app);

export const auth = getAuth(app);

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  
    function logIn(email, password) {
      return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential)
      .catch((error) => error.message);
  }

  function SignOut() {
    return signOut(auth).then(() => {})
      .catch((error) => error);
  }
  // Funcion que crea pedidos es Firestore
  function uploadOrder(clientOrder) {
    const user = auth.currentUser;
    return addDoc(collection(db, 'orders'), {
      ...clientOrder,
      waiterId: user.uid
    });
}
  
    return (
      <AuthContext.Provider value={{ logIn, SignOut, uploadOrder}}>{children}</AuthContext.Provider>
    );
  };
