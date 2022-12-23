
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {

      apiKey: "AIzaSyBH4jZTYg9ZOVyuHFJu_VBQTZNPm0Dc1yo",
    
      authDomain: "kwitterdatabase-100cb.firebaseapp.com",
    
      projectId: "kwitterdatabase-100cb",
    
      storageBucket: "kwitterdatabase-100cb.appspot.com",
    
      messagingSenderId: "312241363480",
    
      appId: "1:312241363480:web:e45c49160101d9663ec16d",
    
      measurementId: "G-43B0C0XE4X"
    
    };
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
