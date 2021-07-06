// SUBMIT BUTTON
const submitBtn = document.querySelector('#previewSubmissionDetails');
const popUpBtn = document.querySelector('.submit_popup__btn');
const closePopUp = document.querySelector('#close_popup');
const submitPopUp = document.querySelector('#submit_popup');
 submitBtn.disabled = true;

// VALIDATION FUNCTION
function validateInput() {
  if(projectName.value.length > 4 && projectTagline.value.length > 4 && projectUSe.value.length > 4 && 
    projectChallenge.value.length > 4 && projectTechnology.value.length > 4 && projectLink.value.length > 5) {
      submitBtn.disabled = false;
  } else {
      submitBtn.disabled = true;
  }
};

// WHEN CLOSE POPUP IS CLICKED
closePopUp.addEventListener('click', () => {
  submitPopUp.style.display = 'none';
})
// WHEN SUBMIT BUTTON IS CLICKED
submitBtn.addEventListener('click', () => {
  submitPopUp.style.display = 'block';
  popUpBtn.disabled = false;
  // console.log('response has been submitted and button disabled');
})
//WHEN THE POPUP BTN IS CLICKED 

popUpBtn.addEventListener('click', () => {
  popUpBtn.disabled = true;
  submitPopUp.style.display = 'none';
})

// INPUT VALIDATION
projectName.addEventListener('keyup', function() {
  validateInput();
});
projectTagline.addEventListener('keyup', function() {
  validateInput();
});
projectUSe.addEventListener('keyup', function() {
  validateInput();
});
projectChallenge.addEventListener('keyup', function() {
  validateInput();
});
projectTechnology.addEventListener('keyup', function() {
  validateInput();
});
projectLink.addEventListener('keyup', function() {
  validateInput();
});
projectVideoLink.addEventListener('keyup', function() {
  validateInput();
});

//////// BACCK END CONNECT
// backend connection
// THE SUBMISSION BUTTON
const popUp = document.querySelector(".inputCnt");


const showLoginAlert = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".subForm");
  container.appendChild(div);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 15000);
};


const formEvent = popUpBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  submissionInfo(); 
});

const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
  'withCredentials': true,
}
const id = window.localStorage.getItem("id");
 
const submissionInfo = async () => {
  axios
    .post("https://hackxbackend.herokuapp.com/submission/"+ id, new FormData(formElem), { headers: headers})
    .then((response) => {
      if (response.status == "200") {
        if (response.data == "Too many files to upload.") {
          showLoginAlert("Too many files to upload.", "error");
        } else if (response.data == "Error when trying to upload files.") {
          showLoginAlert("Error when trying to upload files.", "error");
        }else if (response.data == "Files have been uploaded.") {
          showLoginAlert("Submitted Successfully.", "success");
          window.location.replace('https://hackx.netlify.app/pages/main_dashboard_page');
        } else if (response.data == "Submission Failed") {
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