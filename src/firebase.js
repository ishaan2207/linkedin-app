// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const apiKey = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "linkedin-app-4ec3e.firebaseapp.com",
    projectId: "linkedin-app-4ec3e",
    storageBucket: "linkedin-app-4ec3e.firebasestorage.app",
    messagingSenderId: "301873063251",
    appId: "1:301873063251:web:488d1ae52cb4f1008e2da6",
    measurementId: "G-LXTDES5149"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const provider = new GoogleAuthProvider();

export { provider };