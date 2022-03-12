// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbuHnnWDx5Tw-K5CRAoK5sx-heS0sGiC8",
  authDomain: "clone-facebook-6dfc5.firebaseapp.com",
  databaseURL: "https://clone-facebook-6dfc5.firebaseapp.com ",
  projectId: "clone-facebook-6dfc5",
  storageBucket: "clone-facebook-6dfc5.appspot.com",
  messagingSenderId: "860116395468",
  appId: "1:860116395468:web:5ff9b04c462ceb3ec6e969",
  measurementId: "G-EHB8PBDNP0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;