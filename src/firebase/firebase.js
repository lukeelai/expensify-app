import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgNMCwaAIvjeaD14og9YYV7heLxawEYeo",
  authDomain: "expensify-9cd8e.firebaseapp.com",
  databaseURL: "https://expensify-9cd8e.firebaseio.com",
  projectId: "expensify-9cd8e",
  storageBucket: "",
  messagingSenderId: "1013042114351",
  appId: "1:1013042114351:web:ce538409980e5220"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// const onValueChange = database.ref("expenses").on(
//   "value",
//   snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   },
//   e => {
//     console.log("error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   database.ref().off("value", onValueChange);
// }, 5000);
