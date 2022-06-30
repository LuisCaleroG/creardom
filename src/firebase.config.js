// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1iRrD_6DR72Hcg0Ff6iWDrMdHGDtcg6g",
  authDomain: "creardom-5602a.firebaseapp.com",
  projectId: "creardom-5602a",
  storageBucket: "creardom-5602a.appspot.com",
  messagingSenderId: "568450749531",
  appId: "1:568450749531:web:d9e2a6f7eefffea0dadb7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)