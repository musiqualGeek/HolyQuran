// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7gs-X9KcO_M6_v_rvCcdEGme7l6aBSBc",
    authDomain: "holyquran-f922b.firebaseapp.com",
    projectId: "holyquran-f922b",
    storageBucket: "holyquran-f922b.appspot.com",
    messagingSenderId: "196895921558",
    appId: "1:196895921558:web:a722b99faf6ff2ba7c39b7",
    measurementId: "G-F2FDTHHJ2G"
  };

// Initialize Firebase
initializeApp(firebaseConfig);
const app = getApp();
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { app, auth, db, storage };
