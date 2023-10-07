// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwABmOaS8PaZE4GkmRYNq0NuzTFIbvxZY",
    authDomain: "react-dragon-news-auth-4b5f4.firebaseapp.com",
    projectId: "react-dragon-news-auth-4b5f4",
    storageBucket: "react-dragon-news-auth-4b5f4.appspot.com",
    messagingSenderId: "371285360274",
    appId: "1:371285360274:web:9a33efd04549a87123704b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
