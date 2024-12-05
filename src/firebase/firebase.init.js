// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBOApKa_PbZFFR1nuhNjVUR_mh6Z16oac",
  authDomain: "cineverse-9ca24.firebaseapp.com",
  projectId: "cineverse-9ca24",
  storageBucket: "cineverse-9ca24.firebasestorage.app",
  messagingSenderId: "796749452978",
  appId: "1:796749452978:web:766a681d59e3ef814d1bab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);