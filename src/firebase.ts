// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDhyiCThei52gl50H0Os4qyYg_WBbOGA8M',
  authDomain: 'tinkoff-copy-26665.firebaseapp.com',
  projectId: 'tinkoff-copy-26665',
  storageBucket: 'tinkoff-copy-26665.appspot.com',
  messagingSenderId: '104404877619',
  appId: '1:104404877619:web:4cc839af677a4a6d2bbe46',
  measurementId: 'G-EBG35ECQ1Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);
// .then(userCredential => {
//   console.log(userCredential);
//   // Signed in
//   const user = userCredential.user;
//   console.log('user firebase.ts === ', user);
//   return user;
// })
// .catch(error => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
// });

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);
// .then(userCredential => {
//   // Signed in
//   const user = userCredential.user;
//   // ...
// })
// .catch(error => {
//   const errorCode = error.code;
//   const errorMessage = error.message;
// });

export const logout = () => signOut(auth);

export const db = getFirestore();

// export const register = (email: string, password: string) =>
//   createUserWithEmailAndPassword(auth, email, password);
//
// export const login = (email: string, password: string) =>
//   signInWithEmailAndPassword(auth, email, password);
//
// export const logout = () => signOut(auth);
//
// export const db = getFirestore();
