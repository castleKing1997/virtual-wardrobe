// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP2ZJlPaRYhoXYRpXVdspTGyLUystKsVg",
  authDomain: "virtual-wardrobe-564c0.firebaseapp.com",
  projectId: "virtual-wardrobe-564c0",
  storageBucket: "virtual-wardrobe-564c0.appspot.com",
  messagingSenderId: "494418303091",
  appId: "1:494418303091:web:e5dc7cf00d71224bda7206"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };
