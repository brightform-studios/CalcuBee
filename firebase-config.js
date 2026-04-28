// ⚙️ Firebase configuration for CalcuBee
const firebaseConfig = {
    apiKey: "AIzaSyCa_3ghheMXUu43HCemkDxN5nFKpmRvtoQ",
    authDomain: "calcubee-6963e.firebaseapp.com",
    projectId: "calcubee-6963e",
    storageBucket: "calcubee-6963e.firebasestorage.app",
    messagingSenderId: "588329643250",
    appId: "1:588329643250:web:549b92a4577e108d05346b",
    measurementId: "G-93Q7QVCGQJ"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
