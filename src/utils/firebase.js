// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzo_6bzKnZw9jz3yuy_Hnacs0aARzT70Q",
  authDomain: "netflix-gpt-db57c.firebaseapp.com",
  projectId: "netflix-gpt-db57c",
  storageBucket: "netflix-gpt-db57c.appspot.com",
  messagingSenderId: "592890603861",
  appId: "1:592890603861:web:4d3174a0236971318fa7dc",
  measurementId: "G-KRBLHCP54R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();
