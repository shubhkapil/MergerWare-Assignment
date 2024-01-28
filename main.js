// // Add this script tag to include the Firebase SDK for Authentication and Realtime Database
// <script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js"></script>

// Initialize Firebase with your project config


const firebaseConfig = {
    apiKey: "AIzaSyAAcevKsd20xp_RQX8yDPuNnH4NXnHf_JI",
    authDomain: "loanapplication-a7057.firebaseapp.com",
    projectId: "loanapplication-a7057",
    storageBucket: "loanapplication-a7057.appspot.com",
    messagingSenderId: "808291920390",
    appId: "1:808291920390:web:86b2ad9a4074f305aef187",
    measurementId: "G-BW5GF53V3N"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to register a user and store data in Firebase
function registerUser() {
  var email = document.getElementById('Email').value;
  var password = document.getElementById('Password').value;
  var role = document.getElementById('role').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      
      // Store additional user information in Firebase Realtime Database
      firebase.database().ref('users/' + user.uid).set({
        email: email,
        role: role
      })
      .then(() => {
        alert('Registration successful!');
      })
      .catch((error) => {
        alert('Error storing user data: ' + error.message);
      });
    })
    .catch((error) => {
      alert('Registration failed: ' + error.message);
    });
}

// Function to authenticate user on login
function loginUser() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      alert('Login successful! Welcome, ' + user.email);
    })
    .catch((error) => {
      alert('Login failed: ' + error.message);
    });
}



 