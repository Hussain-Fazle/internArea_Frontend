// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnNFCK_L72vagfeyWnWnDbzxl5M2GOKTc",
  authDomain: "internarea-8e109.firebaseapp.com",
  projectId: "internarea-8e109",
  storageBucket: "internarea-8e109.appspot.com",
  messagingSenderId: "294118881231",
  appId: "1:294118881231:web:7a113bc103e9803b2c84ba",
  measurementId: "G-X2CDKZCEPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider}