
import { initializeApp } from "firebase/app";
/*
To initialize firebase below, go yo  https://firebase.google.com/docs/web/setup?authuser=0&hl=en#add-sdks-initialize
*/
const firebaseConfig = {
    apiKey: "AIzaSyArUZwNLhGP5v6soDKXY5zmLYt0mlzuAec",
    authDomain: "firestock-a37c0.firebaseapp.com",
    projectId: "firestock-a37c0",
    storageBucket: "firestock-a37c0.appspot.com",
    messagingSenderId: "664034041631",
    appId: "1:664034041631:web:a81268719e0591422f9a2a"
  };
// Initialize Firebase
const app = () => {
    if(!firebaseConfig || !firebaseConfig.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
        'Add your web app\'s configuration object to firebase-config.js');
    } else {
        console.log('Firebase initialized!')
    }
    return initializeApp(firebaseConfig);
}
export default app;