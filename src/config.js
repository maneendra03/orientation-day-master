// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPmCCYn3QTNwzeyzCLgVL3fVu1xbaDwS8",
  authDomain: "orientation-44648.firebaseapp.com",
  projectId: "orientation-44648",
  storageBucket: "orientation-44648.appspot.com",
  messagingSenderId: "246685089337",
  appId: "1:246685089337:web:48ea024ad34c1afa4b97e8",
  measurementId: "G-128KTQYJ52" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
