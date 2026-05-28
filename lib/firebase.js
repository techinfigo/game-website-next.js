import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmc4k19hk2VPLZ44XOyOg3b41RUwzsNzY",
  authDomain: "game-academy-2799d.firebaseapp.com",
  projectId: "game-academy-2799d",
  storageBucket: "game-academy-2799d.firebasestorage.app",
  messagingSenderId: "981796500036",
  appId: "1:981796500036:web:75867efc29c32c67eb8211"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getFirestore(app);
