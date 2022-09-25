import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7xQ-vpL-736qa74Ja8wUPeMKxwzqU-iU",
  authDomain: "projetoreactpuc.firebaseapp.com",
  projectId: "projetoreactpuc",
  storageBucket: "projetoreactpuc.appspot.com",
  messagingSenderId: "740530953363",
  appId: "1:740530953363:web:d75babbccf77a5b3e2c166"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;
