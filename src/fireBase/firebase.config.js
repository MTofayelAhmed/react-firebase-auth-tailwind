// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe9G4SJ-FBbR-Kl_KoCfYm41-ACoflwGg",
  authDomain: "react-firebase-auth-tailwind.firebaseapp.com",
  projectId: "react-firebase-auth-tailwind",
  storageBucket: "react-firebase-auth-tailwind.appspot.com",
  messagingSenderId: "316998309141",
  appId: "1:316998309141:web:3b4cc1ec258cfffb9f051c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;