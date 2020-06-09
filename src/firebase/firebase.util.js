import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDiqIgYd_a0LE0hInx6wcHC4IIUTPNzgaM",
  authDomain: "crwn-db-course-f06f4.firebaseapp.com",
  databaseURL: "https://crwn-db-course-f06f4.firebaseio.com",
  projectId: "crwn-db-course-f06f4",
  storageBucket: "crwn-db-course-f06f4.appspot.com",
  messagingSenderId: "122723236280",
  appId: "1:122723236280:web:86f28e8fa9977346c9b74d",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.database();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
