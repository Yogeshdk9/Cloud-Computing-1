// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
  apiKey: 'AIzaSyCv5lBpxJ3BoVXyLw4tSN5JEtTd8DUuJco',
  authDomain: 'cloud1-f4962.firebaseapp.com',
  projectId: 'cloud1-f4962',
  storageBucket: 'cloud1-f4962.appspot.com',
  messagingSenderId: '953355971301',
  appId: '1:953355971301:web:baf1fa9ea9019e5e67c20c',
  measurementId: 'G-TSMFT2LKS2'
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    
  
 document.getElementById("signIn").onclick = function () {
        location.href = "upload.html";
    
  }

  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })
  }