// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// linked with allied firebase
const firebaseConfig = {
  apiKey: "AIzaSyDXJUURqkwkE36GEuCWmvMc100SYxdaGLY",
  authDomain: "holyquran-b3ee0.firebaseapp.com",
  projectId: "holyquran-b3ee0",
  storageBucket: "holyquran-b3ee0.appspot.com",
  messagingSenderId: "90424158428",
  appId: "1:90424158428:web:a85f40f1dac1717ec02c19",
  measurementId: "G-FMQXZ2G19T"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = getApp();
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { app, auth, db, storage };
