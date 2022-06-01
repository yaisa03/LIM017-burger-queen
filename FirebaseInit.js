// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optionalnpm install -g firebase-tools
const firebaseConfig = {
  apiKey: "AIzaSyBIVLuiDWv4F71v__2Yg0Tl6dBFGWRJ-dg",
  authDomain: "burgerqueen-1ffdd.firebaseapp.com",
  projectId: "burgerqueen-1ffdd",
  storageBucket: "burgerqueen-1ffdd.appspot.com",
  messagingSenderId: "489163254362",
  appId: "1:489163254362:web:2f986c4c749ba876b6c663",
  measurementId: "G-41DL3PGZEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);