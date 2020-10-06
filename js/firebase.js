var firebaseConfig = {
  apiKey: "AIzaSyCBCx3mT6dKR2uHaU_FQVQYVFbKTnhBwXU",
  authDomain: "capstone-e5642.firebaseapp.com",
  databaseURL: "https://capstone-e5642.firebaseio.com",
  projectId: "capstone-e5642",
  storageBucket: "capstone-e5642.appspot.com",
  messagingSenderId: "429267534540",
  appId: "1:429267534540:web:2df54b2b5e5f02b82cf869"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db= firebase.firestore();
  const auth = 	firebase.auth();
  const storage = firebase.storage();


  console.log(db);