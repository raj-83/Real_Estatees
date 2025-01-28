// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-18472.firebaseapp.com",
  projectId: "real-estate-18472",
  storageBucket: "real-estate-18472.firebasestorage.app",
  messagingSenderId: "1042948307028",
  appId: "1:1042948307028:web:d66f1041ca219ad04815c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);