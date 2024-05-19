// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3ut5upw-4ObS6jVGOB1E6wb5r5bdTMR8",
  authDomain: "coin-seek.firebaseapp.com",
  projectId: "coin-seek",
  storageBucket: "coin-seek.appspot.com",
  messagingSenderId: "834814043889",
  appId: "1:834814043889:web:516f740ed9284c775a6b50",
  measurementId: "G-TMBH22SMS5"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const analytics = getAnalytics(App);
 const Auth = getAuth(App);
 export const db = getFirestore(App);

// export default App;
export default Auth;