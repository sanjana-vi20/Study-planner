import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByXFOeUn9F3tCC7vFn6j5lPRKtV7S73y4",
  authDomain: "study-planner-60991.firebaseapp.com",
  projectId: "study-planner-60991",
  storageBucket: "study-planner-60991.firebasestorage.app",
  messagingSenderId: "486195477961",
  appId: "1:486195477961:web:e63e7b54d80d5edf69fc18",
  measurementId: "G-MXW2K368EH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };