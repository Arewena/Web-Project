import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCocMXjwl5JKMK-_fjvfilqWsFxpsU6kJ4",
    authDomain: "club-website-b7548.firebaseapp.com",
    projectId: "club-website-b7548",
    storageBucket: "club-website-b7548.appspot.com",
    messagingSenderId: "460361597967",
    appId: "1:460361597967:web:71038c0b1db4d5a54b0f7a",
    measurementId: "G-3MHFGFVVCG"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };