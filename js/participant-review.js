let avatarSubmissionFlex = document.querySelector('.avatar-submission-flex');
let id = window.localStorage.getItem('myId');
var fullname; var time; var bio; var picture; var gender; var number; var track; var link; var institution; var department;

const username = window.localStorage.getItem('partName');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
  'withCredentials': true, 
}
const dataField = () => {
  let panes = `
    <div class="user-details-flex">
      <div class="submission-img-container"></div>
      <div class="submission-details-container">
        <p class="application-no"><b class="spannybolder">Application #${id}</b></p>
        <p class="user-fullname"><b class="spannybolder">${fullname}</b></p>
        <p class="mobile-date-submitted"><b class="spannybolder">${time}</b></p>
        <div class="my-details">
          <p class="details-text">
            <p>
              <span class="spannybold">Bio:</span> <span class="unspannyB">${bio}</span>
            </p>
            <p style="display: flex; flex-direction: row; align-items: flex-start;">
              <span class="spannybold">Biodata:</span> <img alt="biodata image" width="80%" height="auto" src=${picture}>
            </p>
            <p>
              <span class="spannybold">Gender:</span> <span class="unspannyB">${gender}</span>
            </p>
            <p>
              <span class="spannybold">Number:</span> <span class="unspannyB">${number}</span>
            </p>
            <p>
              <span class="spannybold">Track:</span> <span class="unspannyB">${track}</span>
            </p>
            <p>
              <span class="spannybold">Link to past projects:</span> <span class="unspannyB">${link}</span>
            </p>
            <p>
              <span class="spannybold">Institution:</span> <span class="unspannyB">${institution}</span>
            </p>
            <p>
              <span class="spannybold">Department:</span> <span class="unspannyB">${department}</span>
            </p>
          </p>
          </div>
        </div>
      </div>
      <div class="date-submitted-container">
        <p class="date-submitted">
        <b class="spannybolder">${time}</b>
        </p>
      </div>
    </div>
    `;
    avatarSubmissionFlex.innerHTML = panes;
}
axios.get("https://hackxbackend.herokuapp.com/getuser?username=" + username, {headers: headers})
.then((response) => {
  dataField();
  let docu = response.data;
  let dateCreated = docu.dashboard[0].createdAt;
  time = moment(new Date(dateCreated)).format('YYYY-MM-DD');
  firstname = docu.firstname;
  lastname = docu.lastname;
  fullname = firstname + " " + lastname;
  bio = docu.dashboard[0].bio;
  picture = docu.dashboard[0].picture[0];
  gender = docu.dashboard[0].gender;
  number = docu.dashboard[0].number;
  track = docu.dashboard[0].track;
  link = docu.dashboard[0].link;
  institution = docu.dashboard[0].institution;
  department = docu.dashboard[0].department;
  dataField();  
})
.catch((err) => {console.error(err.message)});

 const deleteUser = () => {
  axios.get("https://hackxbackend.herokuapp.com/deleteuser?username=" + username , { headers: headers })
  .then((response) => {
    if(response.data == "olax has been deleted.");
    console.log('user admission has been rejected and successfully deleted');
  })
  .catch((error) => console.error(error));
}