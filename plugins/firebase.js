import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
    var firebaseConfig = {
        apiKey: "AIzaSyCqTKx-xG3SlBhMNibN3xCW7oKrmuhzO6U",
        authDomain: "check-b9516.firebaseapp.com",
        databaseURL: "https://check-b9516.firebaseio.com",
        projectId: "check-b9516",
        storageBucket: "check-b9516.appspot.com",
        messagingSenderId: "101675041173",
        appId: "1:101675041173:web:f930ca3efe8dff0371b69c",
        measurementId: "G-JZ145Q2LEB"
    };
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()