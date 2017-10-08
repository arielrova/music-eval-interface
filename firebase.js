
// Creates a random ID for Firebase
var dbid = parseInt(Math.random() * (999999 - 1) + 1);
console.log(dbid);

var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

firebase.initializeApp(config);

  // Get a reference to the database service
var database = firebase.database();

var setUserData = function(data) {
  var d = new Date();
  d = d.toUTCString();
  database.ref(dbid + "/" + "testUserData").set(data);
  database.ref(dbid + "/" + "timeOfTest").set(d);
};

var setTestData = function(data, test) {
  console.log("hello, Firebase TestData set!");
  console.log(data);
  console.log(test);
  database.ref(dbid + "/" + test).set(data);
};

var setFinishData = function (data) {
  database.ref(dbid + "/" + "finishData").set(data);
};