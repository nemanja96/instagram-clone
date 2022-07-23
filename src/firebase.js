// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVunfVZD0OeahZSb562rWdW5CZkAkBHFA",
  authDomain: "instagram-clone-c253b.firebaseapp.com",
  projectId: "instagram-clone-c253b",
  storageBucket: "instagram-clone-c253b.appspot.com",
  messagingSenderId: "81215396033",
  appId: "1:81215396033:web:7eb35b7f125b89cc255c40"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth }