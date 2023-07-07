
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxEFXIwrSdsTpW1oQa3vqbUQHMQx-XSd0",
  authDomain: "memorys-175ed.firebaseapp.com",
  projectId: "memorys-175ed",
  storageBucket: "memorys-175ed.appspot.com",
  messagingSenderId: "681285434664",
  appId: "1:681285434664:web:e8f41837e8c201a0de641d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);