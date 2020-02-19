import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "tracker-2152.firebaseapp.com",
    databaseURL: "https://tracker-2152.firebaseio.com",
    projectId: "tracker-2152",
    storageBucket: "tracker-2152.appspot.com",
    messagingSenderId: "656359253551",
   
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;