// Your web app's Firebase configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyD9gLmze4tXVeKmYWg45Wpjzkb-YTrzxHY',
  authDomain: 'up-download.firebaseapp.com',
  projectId: 'up-download',
  storageBucket: 'up-download.appspot.com',
  messagingSenderId: '998204977310',
  appId: '1:998204977310:web:e31b31a59569ac4a448b8f',
  measurementId: 'G-WV66DJ5BD0'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//signup function
function signUp() {
  var email = document.getElementById('email');
  var password = document.getElementById('password');

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  //
  promise.catch(e => alert(e.message));
  alert('SignUp Successfully');
}

//signIN function
function signIn() {
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);

  document.getElementById('signIn').onclick = function() {
    location.href = 'upload.html';
  };

  //signOut

  function signOut() {
    auth.signOut();
    alert('SignOut Successfully from System');
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      var email = user.email;
      alert('Active user ' + email);
    } else {
      alert('No Active user Found');
    }
  });
}
