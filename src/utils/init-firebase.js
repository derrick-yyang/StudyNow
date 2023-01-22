// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDftD7lBBcNGL9NUHWM9ucm1RoOodbNyXI",
    authDomain: "conuhacks7-80592.firebaseapp.com",
    projectId: "conuhacks7-80592",
    storageBucket: "conuhacks7-80592.appspot.com",
    messagingSenderId: "511914440118",
    appId: "1:511914440118:web:aa3058490e2cd89ebf7d17",
    measurementId: "G-XJEFJSPDPL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);