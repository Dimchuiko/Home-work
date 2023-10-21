// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBR5wPIy4p-cvBFIngvParzYuDe9AmLYYY",
    authDomain: "netflix-web-f7f56.firebaseapp.com",
    projectId: "netflix-web-f7f56",
    storageBucket: "netflix-web-f7f56.appspot.com",
    messagingSenderId: "947129861343",
    appId: "1:947129861343:web:c6b44123eefda1d95b956a"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)