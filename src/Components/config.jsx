// Import the functions you need from the SDKs you need
import firebase from  'firebase/app'; 

import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvE0V8ulmhasD9WznumzCfi0desBMencQ",
  authDomain: "react-blog-1311a.firebaseapp.com",
  projectId: "react-blog-1311a",
  storageBucket: "react-blog-1311a.appspot.com",
  messagingSenderId: "69376879684",
  appId: "1:69376879684:web:e9543c643a5abeaaed6011"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore=firebase.firestore()