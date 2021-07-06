const loader = document.querySelector('#loader');
const loginForm = document.querySelector(".login-form");
loader.style.display = "none";
loginForm.style.opacity = "1";

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

const formEvent = loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loader.style.display = "block";
  loginForm.style.opacity = ".3";
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const loginInfo = await { email, password };
  if (email === "" || password === "") {
    showLoginAlert("Please Fill All Fields", "error");
  } else {
    userLogin(loginInfo);
  }
});

const userLogin = async (loginInfo) => {
  //http://localhost:8080/login   
  headers = {
    'Content-Type': 'application/json',
    'withCredentials': true
  }


  axios
    .post("https://hackxbackend.herokuapp.com/login",  loginInfo, { headers: headers})
    .then((response) => {
      loader.style.display = "none";
      loginForm.style.opacity = "1";
      response.data;
      // console.log(response)
      if (response.status == "200") {
        if (response.data == "Login Incorrect") {
          showLoginAlert("Login Incorrect", "error");
        } else if (response.data == "Wrong email entered.") {
          showLoginAlert("Email or password entered is incorrect", "error");
        } else if (response.data == "Password Incorrect.") {
          showLoginAlert("Email or password entered is incorrect", "error");
        } else if (response.data == "Session Redirection To Dashboard"){
          window.location.href = 'https://hackx.netlify.app/pages/admin-dashboard-landing-page';
        }else {
          showLoginAlert("Login Successfully", "success");
          localStorage.setItem("pass", response.data.token);
          localStorage.setItem("id", response.data.id);
          localStorage.setItem("username", response.data.username);
          window.location.href = 'https://hackx.netlify.app/pages/admin-dashboard-landing-page';

        }
      } else {
        showLoginAlert("Something Went Wrong. Try Again Later", "error");
      }
    })

    .catch((error) => console.error(error));
};

function viewPassword() {
  var passwordInput = document.getElementById('password');
  var passStatus = document.getElementById('pass');
 
  if (passwordInput.type == 'password'){
    passwordInput.type='text';
    passStatus.className='fa fa-eye';
    
  }
  else{
    passwordInput.type='password';
    passStatus.className='fa fa-eye-slash';
  }
}