// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFCMhdCfOhncRQkUodxRQqgZvZXvbAVjU",
  authDomain: "auth-firebase-context-ta-2fc68.firebaseapp.com",
  projectId: "auth-firebase-context-ta-2fc68",
  storageBucket: "auth-firebase-context-ta-2fc68.appspot.com",
  messagingSenderId: "1018027246037",
  appId: "1:1018027246037:web:0eb1634852de0d0f7e7d5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app