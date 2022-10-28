// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn679YVgO0-aiLgpMBX2vIF0yn4FfMH5c",
  authDomain: "naukri-karenge.firebaseapp.com",
  projectId: "naukri-karenge",
  storageBucket: "naukri-karenge.appspot.com",
  messagingSenderId: "454119720002",
  appId: "1:454119720002:web:811d736402ea05b409d9db",
  measurementId: "G-3S3EJ7PR1N"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore=firebase.firestore();
   


export default firestore;