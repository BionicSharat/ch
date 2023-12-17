// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwc-vp3dLOCgipNzdRmnO7P4jaNwJ_RZU",
  authDomain: "sc-app-c32e2.firebaseapp.com",
  projectId: "sc-app-c32e2",
  storageBucket: "sc-app-c32e2.appspot.com",
  messagingSenderId: "395197523610",
  appId: "1:395197523610:web:e9c129bcf4bd9e16946123",
  measurementId: "G-PBCND88W9S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);