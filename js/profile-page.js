const loginForm = document.querySelector(".login-form");

const showLoginAlert = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".login-container");
  container.insertBefore(div, loginForm);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};



// ALL THE DATA INPUT ON THE PROFILE PAGE
var full_name = document.getElementById('full-name');
var user_name = document.querySelector('#user-name');
//var user_name = document.querySelector('.user-name');
var user_Name = document.querySelector('#user_name');
var last_name = document.getElementById('last-name');
var first_name = document.getElementById('first-name');
var email = document.getElementById('email-address');
var track = document.getElementById('track');
var institution = document.getElementById('institution');


// GETTING THE DATA FROM THE BACKEND
const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
  'withCredentials': true, 
}
const username =  localStorage.getItem('username');
// console.log(username);
user_name.innerHTML = username;
user_Name.innerHTML = username; 

axios
.get("https://hackxbackend.herokuapp.com/getuser?username=" + username , { headers: headers })
.then((response) => {
    full_name.innerHTML = response.data.lastname + " " + response.data.firstname;
    first_name.innerHTML = response.data.firstname;
    last_name.innerHTML = response.data.lastname;
    email.innerHTML = response.data.email;  
    track = response.data.dashboard[0];  
    //ageCnt = response.data.dashboard[1];
    institution = response.data.dashboard[0];
    localStorage.setItem("email", response.data.email);
     console.log(response.data.dashboard[0].institution);  
})
.catch((error) => console.error(error));

function direct() {
  window.location.href = 'https://hackx.netlify.app/pages/profile-username-update';
}        