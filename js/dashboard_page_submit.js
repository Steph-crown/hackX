const formElement = document.querySelector('#formElement');
let finishBtn = document.querySelector('#finish');
let sureToSubmit = document.querySelector('#submit_popup');
let closeSubmitPopUp = document.querySelector('#close_popup');
let loader = document.querySelector('.loadCont');
//let Submit = document.querySelector('.submit_popup__btn');
finishBtn.onclick = () => {
    sureToSubmit.style.display = "block";
    //console.log("opened submit popup");
}
closeSubmitPopUp.style.cursor = 'pointer';
closeSubmitPopUp.onclick = () => {
  sureToSubmit.style.display = "none";
    //console.log('closed submit popup');
}
// // Submit question
// var submitPopup = document.querySelector('#submit_popup');
// var closePopup = document.querySelector('#close_popup');
// finishBtn.onclick = () => {
//   submitPopup.style.display = "block";
//   document.querySelector('.dashboard_all__opacity').style.height = "100%";
//   document.querySelector('.dashboard_all__opacity').style.overflow = "hidden";
// };
// let reDo = () => {
//     submitPopup.style.display = "none";
//     document.querySelector('.dashboard_all__opacity').style.height = "100%";
//     document.querySelector('.dashboard_all__opacity').style.overflow = "auto";
// }
// closePopup.addEventListener('click', () => {
//     submitPopup.style.display = "none";
//     document.querySelector('.dashboard_all__opacity').style.height = "100%";
//     document.querySelector('.dashboard_all__opacity').style.overflow = "auto";
// });

// const popUp = document.querySelector(".response-bar");
// const Submit = document.querySelector(".submit_popup__btn");

// const showLoginAlert = (message, className) => {
//   const div = document.createElement("div");
//   div.className = `alert ${className}`;
//   div.appendChild(document.createTextNode(message));
//   const container = document.querySelector(".participant-info");
//   container.insertBefore(div, popUp);

//   setTimeout(function () {
//     document.querySelector(".alert").remove();
//   }, 12000);
// };
const formEvent = Submit.addEventListener("click", async (event) => {
    event.preventDefault();
    document.querySelector('#submit_popup').style.display = "none";
    dashboardInfo();
  });

const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
  'withCredentials': true, 
}
const id = window.localStorage.getItem("id");
var headApp = document.querySelector('.header_one__app');
var headTime = document.querySelector('.header_two__time');
var headPrize = document.querySelector('.header_two__prize');
var headOver = document.querySelector('.header_two__over');

const linkooo = [];
let newProfile = document.querySelector(".new-profile");
newProfile.addEventListener('click', () => {
  let linko = document.querySelector('#link');
  var addedLink = linko.value;
  if (addedLink.length > 0) {
    linkooo.push(addedLink);
    showLoginAlert("Link has been added successfully", "success");
    //console.log(addedLink.length);
    //console.log(linkooo);
  } else {
    //console.log(addedLink.length);
  }
  linko.value = ""; 
});

let bee = document.querySelector('.d_all');
const dashboardInfo = async () => {
    loader.style.display = 'block';
    bee.style.opacity = ".3";
  const institution = "University of Lagos";
  const department = "null";
  var formData = new FormData(formElement);
  for (var i = 0; i < linkooo.length; i++) {
    formData.append("link[]", linkooo[i]);
  }
  formData.append("institution", institution);
  formData.append("department", department);
  axios
    .post("https://hackxbackend.herokuapp.com/dashboard/"+ id, formData, { headers: headers})
    .then((response) => {
      // console.log(response)
      loader.style.display = 'none';
      bee.style.opacity = "1";
      if (response.status == "200") {
        if (response.data == "Too many files to upload.") {
          showLoginAlert("Too many files to upload.", "error");
        } else if (response.data == "Error when trying to upload files.") {
          showLoginAlert("Error when trying to upload files.", "error");
        }else if (response.data == "Files have been uploaded.") {
          showLoginAlert("Submitted Successfully.", "success");
          document.querySelector('.dashboard_submissionSuccessful').style.display = "block";
          document.querySelector('.dashboard_all__opacity').classList.add('stop_scroll');
          localStorage.setItem("submission", true);
          function clicks() {
            document.querySelector('.dashboard_submissionSuccessful').style.display = 'none';
          }
          headTime.addEventListener('click', ()=> {
            clicks();
          });
          headPrize.addEventListener('click', ()=> {
            clicks();
          });
          headOver.addEventListener('click', ()=> {
            clicks();
          });
          setTimeout (() => {
            window.location.href = "https://hackx.netlify.app/index.html";
          }, 5000);
        } else if (response.data == "Dashboard Submission Failed") {
          showLoginAlert("Unable to submit files.", "error");
        }else if (response.data == 'Invalid Token') {
          showLoginAlert("Unable to submit files.", "error");
        }else if (response.data == 'You are not allowed to access this page.') {
          showLoginAlert('You are not allowed to access this page.', "error");
        } else { 
          showLoginAlert(response.data, "error");
        }
      } else {
        showLoginAlert("Something Went Wrong. Try Again Later", "error");
      }
    })
    .catch((error) => console.error(error.message));
};


var uusername = localStorage.getItem('username');
axios.get("https://hackxbackend.herokuapp.com/getuser?username=" + uusername, {headers: headers})
.then((response) => {
  let docu = response.data;
	// console.log(docu);
  // console.log(docu.dashboard[0]);
  // console.log(uusername);
	if (docu.dashboard[0].bio !== null) {
		document.querySelector('.dashboard_submissionSuccessful').style.display = "block";
		document.querySelector('.participant-info').classList.add('stop_scroll');
		headApp.addEventListener('click', ()=> {
			document.querySelector('.dashboard_submissionSuccessful').style.display = "block";
			document.querySelector('.dashboard_all__opacity').style.display = "none";
			document.querySelector('#displayy_mobile').style.display = "none";
		});
		function clicks() {
			document.querySelector('.dashboard_submissionSuccessful').style.display = 'none';
		}
		headTime.addEventListener('click', ()=> {
			clicks();
		});
		headPrize.addEventListener('click', ()=> {
			clicks();
		});
		headOver.addEventListener('click', ()=> {
			clicks();
		});
	}
})
.catch((err) => {console.error(err.message)});