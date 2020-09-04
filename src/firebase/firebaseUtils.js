import firebase from "firebase/app";
import "firebase/firestore";
//import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBP0tDtDJhPUqG-NRZgMNZnyQagsmFclkc",
  authDomain: "lifeilove-63924.firebaseapp.com",
  databaseURL: "https://lifeilove-63924.firebaseio.com",
  projectId: "lifeilove-63924",
  storageBucket: "lifeilove-63924.appspot.com",
  messagingSenderId: "286608892743",
  appId: "1:286608892743:web:ec73d0545e74fd5ca3e262",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
