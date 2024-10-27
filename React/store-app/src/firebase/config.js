import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC83TWWnlP66zdkg6i4zYD1s4ECcXZFM2o",
  authDomain: "auth-app-65ce3.firebaseapp.com",
  projectId: "auth-app-65ce3",
  storageBucket: "auth-app-65ce3.appspot.com",
  messagingSenderId: "365351160431",
  appId: "1:365351160431:web:612825f2ed3efc017d9b9a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);