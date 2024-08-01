// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-eabe6.firebaseapp.com",
  projectId: "mern-estate-eabe6",
  storageBucket: "mern-estate-eabe6.appspot.com",
  messagingSenderId: "219316796848",
  appId: "1:219316796848:web:29e2fc4807a448e0b92a75"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);