// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
import {getDatabase, ref, push, update} from "firebase/database"
import {useList} from "react-firebase-hooks/database";
import {getStorage, uploadBytes} from "firebase/storage"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);

 const useData = (path) => {
    const dbRef = ref(database, path);
    const [snapshots, loading, error] = useList(dbRef);
    return [snapshots, loading, error];
};

 const setData = async (path, user, messageText) => {
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

const getPictures = (path) => {
     const storageRef = ref(storage, path);
}

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

export {auth, signInWithGoogle, signOutFirebase, useData, setData};

