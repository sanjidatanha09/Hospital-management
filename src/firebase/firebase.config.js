// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// console.log('inside firebase config', import.meta.env.VITE_PASS)

const firebaseConfig = {
    apiKey: "AIzaSyCXeFDRgJug8s02mX6nb2cnBVPYO4a0JYM",
    authDomain: "hospital-management-f641c.firebaseapp.com",
    projectId: "hospital-management-f641c",
    storageBucket: "hospital-management-f641c.appspot.com",
    messagingSenderId: "112522867697",
    appId: "1:112522867697:web:99333a189654f97f0a8a50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
