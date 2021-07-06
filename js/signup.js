const loader = document.querySelector('#loader');
const regLoadCont = document.querySelector('#reg-load-cont');
loader.style.display = "none";
regLoadCont.style.opacity = "1";

//navbar
var myham = document.getElementsByClassName("navbar_myham");
var second = document.getElementsByClassName("navbar_second");
var reg1 = document.getElementsByClassName("navbar_reg1");

var a = 0;
function myfunc1() {
  reg1[0].style.opacity = "0";

  second[0].style.height = "325px";
  second[0].style.width = "auto";
  myham[0].innerHTML = "X";
  a++;

  if (a % 2 === 0) {
    second[0].style.height = "0px";
    second[0].style.overflow = "hidden";
    myham[0].innerHTML = "&#9776";
    reg1[0].style.opacity = "1";
  }
}
myham[0].addEventListener("click", myfunc1);

// signup 1
const signup = document.querySelector(".signup");
const signup_btn = document.querySelector(".signup-btnn");
let enable;

const showAlert_signup = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".register-form-container");
  container.insertBefore(div, regLoadCont);
  loader.style.display = "none";
  regLoadCont.style.opacity = "1";
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 9000);
};

let firstname = "";
let lastname = "";
let email = "";
let username = "";
let password = "";
let confirmPassword = "";

// THIS CODE MAKES A BOOLEAN IF THE CONDITION IS MET
var checked = false;
var checkbox = document.querySelector('#policy');
document.querySelector('#policy-set').addEventListener('click', function() {
  if (checkbox.checked) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }
  if (checkbox.checked === false) {
    checked = true;
    //console.log('yeah, it worked :) ' + checked);
  } else {
    checked = false;
    //console.log('Nah, it didn\'t work :( ' + checked);
  }
});


const signup_1_Event = signup_btn.addEventListener("click", async (event) => {
  event.preventDefault();
  loader.style.display = "block";
  regLoadCont.style.opacity = ".3";
//signup_btn.style.backgroundColor = "blue";

  firstname = document.querySelector("#first_name").value;
  lastname = document.querySelector("#last_name").value;
  email = document.querySelector("#signup_email").value;
  username = document.querySelector("#username").value;
  password = document.querySelector("#password").value;
  confirmPassword = document.querySelector("#confirm_password").value;
  const signupInfo = await {
    firstname,
    lastname,
    email,
    username,
    password,
    confirmPassword,
  };
  if (
    firstname === "" ||
    lastname === "" ||
    email === "" ||
    username === "" ||
    password === "" ||
    confirmPassword === "" ||
    checked === false
    
  ) {
    showAlert_signup("Please Fill All Fields", "error");
    console.log('error message');
  } else if (password != confirmPassword) {
    showAlert_signup("Passwords Don't Match", "error");
    console.log('password mismatch');
  } 
  else {
  	signup_btn.disabled = true;
   enableSignup()
   signup_btn.style.backgroundColor = "#FF3232";
   console.log('success');
    createSignup(signupInfo);
  }
});


const createSignup = async (signupInfo) => {
  axios
    .post("nolink", signupInfo)
    .then((response) => {
      loader.style.display = "none";
      regLoadCont.style.opacity = "1";
      response.data;


//Disabling Button Code Starts

  console.log("meeee")
  if(response.status != ""){
	     signup_btn.disabled = false;
	     clearInterval(enable);
	     signup_btn.style.backgroundColor = "green";
		 }
		 if(response.status == ""){
	     signup_btn.disabled = true;
	     signup_btn.style.backgroundColor = "lime";
		 }

//Disabling Button Code Ends		 


      if (response.status == "200") {
        if (response.data == "Failed to signup") {
          showAlert_signup("Email used already. ", "error");
        } else if(response.data.message == "Successfully Signed Up"){
          localStorage.setItem("username", response.data.username);
          showAlert_signup("Signup Successfully", "success");
          window.location.href = 'https://hackx.netlify.app/pages/login'; 
        } else if (response.data == "Session Redirection To Dashboard"){
          window.location.href = 'https://hackx.netlify.app/pages/login';
        }
        else {
          showAlert_signup(response.data, "error");
        }
      } else {
        showAlert_signup("Something Went Wrong. Try Again Later", "error");
      }
    })
    .catch((error) => console.error(error));
};


//Disabling Button Code Starts

const enableSignup = () =>{
enable = setInterval(createSignup,1000)
  }
//Disabling Button Code Ends		    
