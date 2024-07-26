import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
require('dotenv').config();
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_INITIAL+".firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_INITIAL,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_INITIAL+".appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);