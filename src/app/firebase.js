import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


//import { firebase} from 'firebase';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw_lCu73LtRW3MM9zm55G15QNsrmNQe9g",
  authDomain: "clone-yt-7e521.firebaseapp.com",
  projectId: "clone-yt-7e521",
  storageBucket: "clone-yt-7e521.appspot.com",
  messagingSenderId: "599007145479",
  appId: "1:599007145479:web:f19b52bfaa2e10329944a2",
  measurementId: "G-GHLSBXNMCF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// Initialize Firebase
//const firebaseApp = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(firebaseApp);
//const db = app.firestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth, db, provider}; 
