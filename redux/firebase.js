import * as firebase from 'firebase'

  var Config = {
    apiKey: "AIzaSyAc5SpsoGt_1UaRKyuwM7q6WVHh9XR5Z18",
    authDomain: "locate-me-953b9.firebaseapp.com",
    databaseURL: "https://locate-me-953b9-default-rtdb.firebaseio.com",
    projectId: "locate-me-953b9",
    storageBucket: "locate-me-953b9.appspot.com",
    messagingSenderId: "1045489579211"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);

  export default firebase;