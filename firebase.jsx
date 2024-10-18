const firebaseConfig = {
    apiKey: "",
    authDomain: "movie-382e8.firebaseapp.com",
    projectId: "movie-382e8",
    storageBucket: "movie-382e8.appspot.com",
    messagingSenderId: "481895442119",
    appId: "1:481895442119:web:daa5418539a93fb24780e2",
    measurementId: "G-H1Q2ZD30D6"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
