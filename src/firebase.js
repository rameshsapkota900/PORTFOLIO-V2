import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeKEoIpjb880iWRjvbF06Jx4bsdQdEbmk",
  authDomain: "portfolio-72a49.firebaseapp.com",
  projectId: "portfolio-72a49",
  storageBucket: "portfolio-72a49.firebasestorage.app",
  messagingSenderId: "310211044217",
  appId: "1:310211044217:web:26dc4ae1a96dfb640745a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };