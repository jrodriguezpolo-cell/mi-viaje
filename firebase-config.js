import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyAG8uGu1rE6jCGrYzTN2C9KZm11C5t0mbE",
  authDomain: "mi-viaje-27178.firebaseapp.com",
  projectId: "mi-viaje-27178",
  storageBucket: "mi-viaje-27178.firebasestorage.app",
  messagingSenderId: "786484548539",
  appId: "1:786484548539:web:5cb43be619a65e57b3a1fc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
