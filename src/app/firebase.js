// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw_lCu73LtRW3MM9zm55G15QNsrmNQe9g",
  authDomain: "clone-yt-7e521.firebaseapp.com",
  projectId: "clone-yt-7e521",
  storageBucket: "clone-yt-7e521.appspot.com",
  messagingSenderId: "599007145479",
  appId: "1:599007145479:web:f19b52bfaa2e10329944a2",
  measurementId: "G-GHLSBXNMCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);