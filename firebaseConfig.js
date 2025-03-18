import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "messenger-70dd8.firebaseapp.com",
  projectId: "messenger-70dd8",
  storageBucket: "messenger-70dd8.firebasestorage.app",
  messagingSenderId: "694061515432",
  appId: "1:694061515432:web:e545756f4e7d5a1c53f89d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
