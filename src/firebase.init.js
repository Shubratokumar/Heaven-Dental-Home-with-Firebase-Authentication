// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDibPtqenIYZWuk3k1hgeV2Ld_ByarWJsY",
  authDomain: "service-provider-with-firebase.firebaseapp.com",
  projectId: "service-provider-with-firebase",
  storageBucket: "service-provider-with-firebase.appspot.com",
  messagingSenderId: "703076737446",
  appId: "1:703076737446:web:84979cce88b0c3c680af67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;