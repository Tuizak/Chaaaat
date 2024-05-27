import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Agrega el console.log aquí para verificar la clave API
console.log(import.meta.env.VITE_API_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-6bd87.firebaseapp.com",
  projectId: "reactchat-6bd87",
  storageBucket: "reactchat-6bd87.appspot.com",
  messagingSenderId: "387996619988",
  appId: "1:387996619988:web:6c0f74cb9e0c6e50bb5741"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
