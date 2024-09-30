// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADlUjSiYMvfHhyDDv4JK_6aTq0eumfnMk",
  authDomain: "espresso-emporium-cf47e.firebaseapp.com",
  projectId: "espresso-emporium-cf47e",
  storageBucket: "espresso-emporium-cf47e.appspot.com",
  messagingSenderId: "863756599477",
  appId: "1:863756599477:web:6f830a0d665fa8f156befc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;
