// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import {getDatabase, ref, push, update} from "firebase/database"
import {useList} from "react-firebase-hooks/database";

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
const database = getDatabase(firebaseApp);


export const useData = (path) => {
    const dbRef = ref(database, path);
    const [snapshots, loading, error] = useList(dbRef);
    return [snapshots, loading, error];
};

export const setData = async (path, user, messageText) => {
    const updatedData = {};
    const newMessageData = {
            "author": user.displayName,
            "email": user.email,
            "text": messageText,
            "timestamp": Date.now()
    };
    const uniqueKey = push(ref(database, path), newMessageData).key;
    updatedData[uniqueKey] = newMessageData;

    await update(ref(database, path), updatedData);
}

//export const setData = async (path, user, messageText) => {
//     const key = randomId();
//     const messageData = {};
//     messageData[key] = {
//             "author": user.displayName,
//             "email": user.email,
//             "text": messageText,
//             "timestamp": Date.now()
//     };
//     console.log("messageData", messageData);
//     // ref(database, path).push(data);
//     await update(ref(database, path), messageData);
// }
// function randomId(): string {
//     const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
//     return uint32.toString(16);
// }

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

export {auth, signInWithGoogle, signOutFirebase};

