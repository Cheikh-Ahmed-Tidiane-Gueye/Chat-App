import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXSq3vY_AVOpUlLAQ4nxmR9I2GcdaYbhc",
  authDomain: "chat-app-d8a0c.firebaseapp.com",
  projectId: "chat-app-d8a0c",
  storageBucket: "chat-app-d8a0c.appspot.com",
  messagingSenderId: "342481153332",
  appId: "1:342481153332:web:94c6ba8731950eefef8961",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
