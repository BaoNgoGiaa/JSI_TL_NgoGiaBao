import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyCBid1Cms3SQCeoRs-HdGq46dV0asJDLWs",
  authDomain: "spck-bao.firebaseapp.com",
  projectId: "spck-bao",
  storageBucket: "spck-bao.appspot.com",
  messagingSenderId: "10550057195",
  appId: "1:10550057195:web:8ebdf02d5aa442cf5246ae",
  measurementId: "G-2WYXQ7EYJB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const dangki = (auth, email, pass) => {
  createUserWithEmailAndPassword(auth, email, pass)
    .then((user) => {
      alert("dang ki thanh cong")
    })
    .catch((error) => {
      alert("dang ki that bai" )
      console.log(error.code)
    });
};
