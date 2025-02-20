import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzkFuXif9QnoS6ZVygS-_pDgL11ImfHZU",
  authDomain: "chat-fb797.firebaseapp.com",
  projectId: "chat-fb797",
  storageBucket: "chat-fb797.appspot.com",
  messagingSenderId: "379931740258",
  appId: "1:379931740258:web:83ef3959358562d760e93b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();