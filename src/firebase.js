import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdX7yIXc_EjB1HJEI6d6WzXdo2GdY-kv4",
  authDomain: "udemy-react-2025-f2cae.firebaseapp.com",
  projectId: "udemy-react-2025-f2cae",
  storageBucket: "udemy-react-2025-f2cae.firebasestorage.app", 
  messagingSenderId: "705409962369",
  appId: "1:705409962369:web:8497908a4569efcf579880",
  measurementId: "G-GZS2Y49WZL",
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider, }