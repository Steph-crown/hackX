// GETTING THE DATA FROM THE BACKEND
const applicont = document.querySelector('#appliContainer');
const headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
    'withCredentials': true, 
}
let username = "";
let inputCnt = document.querySelector('#inputVal');
let userBtn = document.querySelector('#btn-user');

const allForOne = document.querySelector('.allForOne');
const showLoginAlert = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  allForOne.insertBefore(div, applicont);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

let getUser = () => {
    axios.get("https://hackxbackend.herokuapp.com/getuser?username=" + username , { headers: headers })
    .then((response) => {
        if (response.status == "200") {
            if (response.data == "Incorrect username") {
                showLoginAlert("Incorrect username", "error");
            } else {
                showLoginAlert("correct username", "success");
                window.localStorage.setItem('teamLeadSubName', username);
                window.location.href = ('view_submission.html');
            }
        } else {
            showLoginAlert("Something Went Wrong. Try Again Later", "error");
        }
    })
    .catch((error) => console.error(error));
}


userBtn.onclick = function () {
    username = inputCnt.value;
    // console.log(username);
    getUser();
}