import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {
    getFirestore
} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyB80Vr2CZfMLZ-IB-UCGS_2mtKQXPUHmHU",
    authDomain: "final-cd353.firebaseapp.com",
    projectId: "final-cd353",
    storageBucket: "final-cd353.appspot.com",
    messagingSenderId: "312670022158",
    appId: "1:312670022158:web:f4f576db1da35327aa2a5f",
    measurementId: "G-CV24JMV161"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
