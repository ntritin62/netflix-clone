import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
    apiKey: "AIzaSyBrG91f_btV0ONUfppzcLaNTFO6CYP_1KY",
    authDomain: "netflix-f04de.firebaseapp.com",
    projectId: "netflix-f04de",
    storageBucket: "netflix-f04de.appspot.com",
    messagingSenderId: "1007213367523",
    appId: "1:1007213367523:web:6437e582a906f9d28bf5d6",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
