// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN-epSy9VItqPj3nRL8AKfWji_sQo9ir0",
  authDomain: "kabadi-scrapper.firebaseapp.com",
  projectId: "kabadi-scrapper",
  storageBucket: "kabadi-scrapper.appspot.com",
  messagingSenderId: "601535062847",
  appId: "1:601535062847:web:10b1c33d664308256ea98a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // Get Storage instance

export { db, collection, storage, ref, uploadBytes, getDownloadURL }; 