import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA02gGqKIb8-jhLm6ccTHrYLcLJTMR3heU",
  authDomain: "budgie-budgie.firebaseapp.com",
  projectId: "budgie-budgie",
  storageBucket: "budgie-budgie.appspot.com",
  messagingSenderId: "108196937561",
  appId: "1:108196937561:web:ec886e436878329e071648",
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
