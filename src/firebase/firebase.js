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

database
  .ref()
  .set({
    name: "Luke",
    age: 25,
    isSingle: false,
    location: {
      city: "Davis",
      state: "CA"
    }
  })
  .then(() => {
    console.log("Data saved");
  })
  .catch(e => {
    console.log("This failed", e);
  });

database
  .ref("isSingle")
  .remove()
  .then(() => {
    console.log("Remove Item");
  })
  .catch(e => {
    console.log("Failed to remove item", e);
  });
