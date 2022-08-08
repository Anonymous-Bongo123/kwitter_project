const firebaseConfig = {
    apiKey: "AIzaSyBzq1Qrn0Wq1uF8Ynh1Y9DHDnR2S70dfBM",
    authDomain: "kwitter-project-98f72.firebaseapp.com",
    databaseURL: "https://kwitter-project-98f72-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-98f72",
    storageBucket: "kwitter-project-98f72.appspot.com",
    messagingSenderId: "929652609193",
    appId: "1:929652609193:web:0a0d63b887a7d0724e59b8"
  };
  
const app = initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
