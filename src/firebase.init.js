// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhJHb-AVZeE-l59ixczAK4i-Jp_GdYKH8",
  authDomain: "ema-zon-5db4c.firebaseapp.com",
  projectId: "ema-zon-5db4c",
  storageBucket: "ema-zon-5db4c.appspot.com",
  messagingSenderId: "1003976025646",
  appId: "1:1003976025646:web:e3a84fd5b99284da7421bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;