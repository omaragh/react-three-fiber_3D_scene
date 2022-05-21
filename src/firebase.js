// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRCUNuIICDco9-TTm5ddMrj9MUeJNqxUo",
  authDomain: "anymate-54c8f.firebaseapp.com",
  projectId: "anymate-54c8f",
  storageBucket: "anymate-54c8f.appspot.com",
  messagingSenderId: "871064213415",
  appId: "1:871064213415:web:17ef193497d88af3dac882"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)