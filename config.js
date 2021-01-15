import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyAGYBLu0anXeb_EGHd90oAUXg0kgJYpcyA",
  authDomain: "project77-ca194.firebaseapp.com",
  projectId: "project77-ca194",
  storageBucket: "project77-ca194.appspot.com",
  messagingSenderId: "436301225627",
  appId: "1:436301225627:web:e550c4cc6e8ede6a34703e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
