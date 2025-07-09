// src/firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCC1UsrDv0ss6edgNwLN89P73OkbbgMQ8o",
  authDomain: "qoura-clone-chitranjan.firebaseapp.com",
  projectId: "qoura-clone-chitranjan",
  storageBucket: "qoura-clone-chitranjan.appspot.com", // ✅ corrected
  messagingSenderId: "25185042179",
  appId: "1:25185042179:web:c0070fb6c3532314bff336",
  measurementId: "G-17EQQTN7WS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
