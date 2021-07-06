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

// JS FILE FOR THE PASSWORD RESET HTML PAGE
function viewNewPassword() {
    var passwordInputNew = document.querySelector('#newPassword');
    var passStatusNew = document.getElementById('passNew');
   
    if (passwordInputNew.type == 'password'){
      passwordInputNew.type='text';
      passStatusNew.className='fa fa-eye';
      
    }
    else{
      passwordInputNew.type='password';
      passStatusNew.className='fa fa-eye-slash';
    }
  }
function viewConfirmPassword() {
    var passwordInputConfirm = document.querySelector('#confirmPassword');
    var passStatusConfirm = document.getElementById('passConfirm');
   
    if (passwordInputConfirm.type == 'password'){
      passwordInputConfirm.type='text';
      passStatusConfirm.className='fa fa-eye';
    }
    else{
      passwordInputConfirm.type='password';
      passStatusConfirm.className='fa fa-eye-slash';
    }
  }

  // BACKEND CONNECTION
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

const formEvent = loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = localStorage.getItem("email");
  const newPassword = document.querySelector('#newPassword').value;
  const password = document.querySelector("#confirmPassword").value;
  const passwordUpdateInfo = await { email, password };
  if (newPassword === "" || password === "") {
    showLoginAlert("Please Fill All Fields", "error");
  } else if (newPassword != password) {
    showLoginAlert("Password Mismatch", "error");
  } else {
    userDetails(passwordUpdateInfo);
  }
});

const userDetails = async (passwordUpdateInfo) => {
  //http://localhost:8080/updatePassword   
  headers = {
    'Content-Type': 'application/json',
    'withCredentials': true
  }


  axios
    .put("https://hackxbackend.herokuapp.com/updatePassword/",  passwordUpdateInfo, { headers: headers})
    .then((response) => {
      response.data;
      // console.log(response)
      if (response.status == "200") {
        if (response.data == "Password has been updated Successfully.") {
          showLoginAlert("Password updated Successfully", "success");
          window.location.href = 'https://hackx.netlify.app/pages/Login';
        } else {
          showLoginAlert("Details entered not correct", "error");
        }
      } else {
        showLoginAlert("Something Went Wrong. Try Again Later", "error");
      }
    })

    .catch((error) => console.error(error));
};