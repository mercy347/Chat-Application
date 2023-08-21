// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIbxDoKiLXjaCRBpsFdEXIEcDLCfjibJI",
  authDomain: "chat-app-f46b4.firebaseapp.com",
  projectId: "chat-app-f46b4",
  storageBucket: "chat-app-f46b4.appspot.com",
  messagingSenderId: "282138344722",
  appId: "1:282138344722:web:e625b1db510f351e9a47cb",
  measurementId: "G-PJ1T0P11DZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db=getFirestore(app)

export {
    auth,
    provider,
    db
}