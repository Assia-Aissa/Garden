// firebase-config.js
// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4mPjIM1nANcXivhXTRKvYN3eUt0OLVoA",
    authDomain: "garden-52e5c.firebaseapp.com",
    projectId: "garden-52e5c",
    storageBucket: "garden-52e5c.firebasestorage.app",
    messagingSenderId: "49737114730",
    appId: "1:49737114730:web:2f7969e1fcc7453e305613",
    measurementId: "G-9B1FC8EH9H"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider();