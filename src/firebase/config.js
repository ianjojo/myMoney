import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxEAyYXjSmE5yy5zumIGal_wGP3lGlFMw",
  authDomain: "mymoney-a7cd3.firebaseapp.com",
  projectId: "mymoney-a7cd3",
  storageBucket: "mymoney-a7cd3.appspot.com",
  messagingSenderId: "604729960597",
  appId: "1:604729960597:web:680f2d3ecb283e24b3139c",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
