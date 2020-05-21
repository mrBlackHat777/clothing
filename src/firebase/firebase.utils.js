import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
const config = {
    apiKey: "AIzaSyCA_XBQSfUmTns3iE15Gbx-r2-LeGdw0K4",
    authDomain: "clothes-47c98.firebaseapp.com",
    databaseURL: "https://clothes-47c98.firebaseio.com",
    projectId: "clothes-47c98",
    storageBucket: "clothes-47c98.appspot.com",
    messagingSenderId: "168628438055",
    appId: "1:168628438055:web:075550d2d7ee8113a47a02",
    measurementId: "G-JR240C19J7"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth()
  export const firestore=firebase.firestore();

  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;