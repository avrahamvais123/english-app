// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9a2pZVKeeapzw57sgakuLz6Wg7rb93DY",
  authDomain: "english-app-98db3.firebaseapp.com",
  projectId: "english-app-98db3",
  storageBucket: "english-app-98db3.appspot.com",
  messagingSenderId: "784347582184",
  appId: "1:784347582184:web:c4c4d26378ec08c27b035d",
  measurementId: "G-XNTYEK4WYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);