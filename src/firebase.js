// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCikpq7bEnCPD1G4NJSF7GQGaR7H4NgK24",
    authDomain: "the-glottal-stop-bookmobile.firebaseapp.com",
    projectId: "the-glottal-stop-bookmobile",
    storageBucket: "the-glottal-stop-bookmobile.appspot.com",
    messagingSenderId: "777083488651",
    appId: "1:777083488651:web:3505be5d1d7859d885078e",
    measurementId: "G-6MQMD96CGZ"
};

// Initialize Firebase

// The example from Firebase looked like this// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// But I changed the name to name it more specific (hope it works)

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export default firebaseApp;