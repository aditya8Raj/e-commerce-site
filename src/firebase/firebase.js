import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD86m2Zvr8nKKgR9dW6Pxqu4sjuznV79ok",
  authDomain: "juice-shop-35e7b.firebaseapp.com",
  projectId: "juice-shop-35e7b",
  storageBucket: "juice-shop-35e7b.appspot.com",
  messagingSenderId: "948078266694",
  appId: "1:948078266694:web:ccf1aa3e963ed96d89bd47",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
