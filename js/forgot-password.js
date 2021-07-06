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
  const email = document.querySelector("#email").value;
  localStorage.setItem("email", email);
  const username = document.querySelector("#username").value;
  const forgotPasswordInfo = await { email, username };
  if (email === "" || username === "") {
    showLoginAlert("Please Fill All Fields", "error");
  } else {
    userDetails(forgotPasswordInfo);
  }
});

const userDetails = async (forgotPasswordInfo) => {
  //http://localhost:8080/login   
  headers = {
    'Content-Type': 'application/json',
    'withCredentials': true
  };


  axios
    .post("https://hackxbackend.herokuapp.com/forgotPassword",  forgotPasswordInfo, { headers: headers})
    .then((response) => {
      response.data;
      // console.log(response)
      if (response.status == "200") {
        if (response.data == "Forgot password redirect.") {
          window.location.href = 'https://hackx.netlify.app/pages/password-update';
        } else {
          showLoginAlert("Credentials do not match", "error");
        }
      } else {
        showLoginAlert("Something Went Wrong. Try Again Later", "error");
      }
    })

    .catch((error) => console.error(error));
};

