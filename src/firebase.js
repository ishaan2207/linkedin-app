// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBieroSRdGOjkjMaxhl5iGfTjXKOA2kOYA",
    authDomain: "linkedin-1602c.firebaseapp.com",
    projectId: "linkedin-1602c",
    storageBucket: "linkedin-1602c.firebasestorage.app",
    messagingSenderId: "1000117354614",
    appId: "1:1000117354614:web:8785f9c5b51cab465d9f57",
    measurementId: "G-JVFM625KJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const provider = new GoogleAuthProvider();

export { provider };