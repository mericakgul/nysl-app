// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "nysl-app-a9d78.firebaseapp.com",
    databaseURL: "https://nysl-app-a9d78-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nysl-app-a9d78",
    storageBucket: "nysl-app-a9d78.appspot.com",
    messagingSenderId: "876223459549",
    appId: "1:876223459549:web:7c5e9baac6ace0985ceb34",
    measurementId: "G-ZZX8QGWZCL"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
export const database = getDatabase(firebaseApp);

const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (err) {
        console.error(err);
    }
}

const signOutFirebase = async () => {
    await signOut(auth);
}

export const submitMessageToFirebase = () => {

}

export {auth, signInWithGoogle, signOutFirebase};

