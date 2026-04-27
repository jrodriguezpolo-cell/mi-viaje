import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyAG8uGu1rE6jCGrYzTN2C9KZm11C5t0mbE",
  authDomain: "mi-viaje-27178.firebaseapp.com",
  projectId: "mi-viaje-27178",
  storageBucket: "mi-viaje-27178.firebasestorage.app",
  messagingSenderId: "284807555246",
  appId: "1:284807555246:web:b63d757f7db25552fde53f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
