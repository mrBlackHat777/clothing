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


//api Action=asynchronous
  export const createUserProfilDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc (`users/${userAuth.uid}`)
    const snapShot= await userRef.get();
    console.log(userRef)
    console.log(snapShot)
    if(!snapShot.exists){
      const{displayName,email}=userAuth;
      const createdAt=new Date();
      try{
        //async request
        await userRef.set({
          displayName,email,createdAt,...additionalData
        }
        )
      }catch(err){
        console.log('error creating user',err.message)
      }
    }
  return userRef
  }
  firebase.initializeApp(config);

  export const auth=firebase.auth()
  export const firestore=firebase.firestore();

  /*
  firestore.collection('users').doc('').collection('cartItems').doc('')
  firestore.doc(''user/.../cartItems/....)
  */
  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase;