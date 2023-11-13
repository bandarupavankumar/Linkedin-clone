import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCk405OT1WfGpLnhAk3JmqOJivvC_ECCR4",
    authDomain: "linkedin-clone-c7792.firebaseapp.com",
    projectId: "linkedin-clone-c7792",
    storageBucket: "linkedin-clone-c7792.appspot.com",
    messagingSenderId: "135595199143",
    appId: "1:135595199143:web:7f1b8373c4ec21bfe6e982"
  };
 
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;