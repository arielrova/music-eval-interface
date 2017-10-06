var dbid = parseInt(Math.random() * (999999 - 1) + 1);
console.log(dbid);

var config = {
    apiKey: "AIzaSyClbiWyZvor4u8k71PWDAtV1FYRHqyds6k",
    authDomain: "perception-database.firebaseapp.com",
    databaseURL: "https://perception-database.firebaseio.com",
    projectId: "perception-database",
    storageBucket: "perception-database.appspot.com",
    messagingSenderId: "827210544006"
  };

firebase.initializeApp(config);

  // Get a reference to the database service
var database = firebase.database();

var setUserData = function(data) {
  database.ref(dbid + "/" + "testUserData").set(data);
};

var setTestData = function(data, test) {
  database.ref(dbid + "/" + test).set(data);
};