// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "nysl-app-a9d78.firebaseapp.com",
    projectId: "nysl-app-a9d78",
    storageBucket: "nysl-app-a9d78.appspot.com",
    messagingSenderId: "876223459549",
    appId: "1:876223459549:web:7c5e9baac6ace0985ceb34",
    measurementId: "G-ZZX8QGWZCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);