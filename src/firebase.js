// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY0hYpWi3VDeJ4YG2XcDT1-qFtgI1CjIs",
  authDomain: "my-dictionary-2a85d.firebaseapp.com",
  projectId: "my-dictionary-2a85d",
  storageBucket: "my-dictionary-2a85d.appspot.com",
  messagingSenderId: "1032446169771",
  appId: "1:1032446169771:web:f15fdf35d43b7e455f9dee",
  measurementId: "G-V0RZK2C2W1"
};
initializeApp(firebaseConfig)
// const app = initializeApp(firebaseConfig);
// Initialize Firebase

export const db = getFirestore();