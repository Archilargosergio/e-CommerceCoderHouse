import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyBGVznYSiX943hFHjNyAxCDxctRZgxil34",
  authDomain: "e-commerce-coder-house-b44fa.firebaseapp.com",
  projectId: "e-commerce-coder-house-b44fa",
  storageBucket: "e-commerce-coder-house-b44fa.appspot.com",
  messagingSenderId: "857909865973",
  appId: "1:857909865973:web:c90e155cba8aae654f84bc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const productsCollection = collection(db, 'products');