import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBcf5DLFVPvWWsJLJH060gefzMDqmGqM4Q",
  authDomain: "bicycle-7b26e.firebaseapp.com",
  projectId: "bicycle-7b26e",
  storageBucket: "bicycle-7b26e.appspot.com",
  messagingSenderId: "241005676342",
  appId: "1:241005676342:web:4488eff3116b8f238e9597"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}



export default firebase.firestore();
