// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpFfZG2wTUidK06-bdaw9aqBQQBO4xMqc",
  authDomain: "personality-rating.firebaseapp.com",
  projectId: "personality-rating",
  storageBucket: "personality-rating.firebasestorage.app",
  messagingSenderId: "1056348504143",
  appId: "1:1056348504143:web:e48f5b49bedfacb3b7ea3a",
  measurementId: "G-VGN3DFRCQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
