import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMhVIuD7_q66RJT72BiGdChLAkz-L3JKk",
  authDomain: "notes-app-c3d91.firebaseapp.com",
  projectId: "notes-app-c3d91",
  storageBucket: "notes-app-c3d91.appspot.com",
  messagingSenderId: "7449840593",
  appId: "1:7449840593:web:e1bc5d0ef5f318782c6ef0",
  measurementId: "G-778VH2NSD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebase;