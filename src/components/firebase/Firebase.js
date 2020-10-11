import app from "firebase/app";

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js"></script>

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyApD3FYz26VKFPbKxFg1Z1punWtlkWuDJs",
    authDomain: "c-donation.firebaseapp.com",
    databaseURL: "https://c-donation.firebaseio.com",
    projectId: "c-donation",
    storageBucket: "c-donation.appspot.com",
    messagingSenderId: "374683016368",
    appId: "1:374683016368:web:755a19dc44fd0f07002f75"
    // apiKey: process.env.REACT_APP_FIREBASE_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
});

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
    }
}


export default Firebase;
