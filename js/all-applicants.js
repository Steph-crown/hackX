let loader  = document.querySelector('#loadCont');
let applicont = document.querySelector('#appliContainer');
let main = document.querySelector('main');
loader.style.display = "flex";
main.style.visibility = "hidden";

const headers = {
  'Content-Type': 'application/json',
  'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
  'withCredentials': true, 
}
  let userNameArr = [];
 let usersId = [];
 let gotten = true;
 const getUserDetails = () => {
 // console.log('bull shit 4 bull eye');
}

axios.get("https://hackxbackend.herokuapp.com/alluser" , { headers: headers })
.then((response) => {
  loader.style.display = "none";
  main.style.visibility = "visible";
  var doc = response.data.doc;
  //console.log(doc);
  var id = 0;
  var demId = `${"pane" + id}`;
  let newCont = () => {
    //console.log(id);
    let dateCreated = doc[i].createdAt;
    let editedDate = moment(new Date(dateCreated)).format('YYYY-MM-DD');
    let newPane = 
    `<div class="submission-detail" id= ${demId}>
        <div class="column-one">
            <div class="real-submission">
                <h5 class="submission-tag">Application ${id}</h5>
                <h5 class="participant-name">${doc[i].firstname + " "} ${doc[i].lastname}</h5>
            </div>
        </div>
        <div class="col" style="display: flex; flex-direction: column;">
        <h5 class="time">${editedDate}</h5>
        <button style="font-weight: bold" class="view-button">View</button>
    </div>
    <hr class="submission-hr"></hr>`;
    applicont.innerHTML += newPane;
    userNameArr.push(doc[i].username);
    demId = `${"pane" + id}`;
    usersId.push(window['pane'+id]);
  }
  for(var i = doc.length - 1; i > -1; i--) {
    id++;
    
    newCont();
    // console.log(doc[i].username);
  }
  //console.log(userNameArr);
  localStorage.setItem('usernameArray', userNameArr);
  //console.log(usersId);
  //for (var i=0; i<usersId.length; i++) {
  //  usersId[i].addEventListener('click', getUserDetails());
  //}
  var allViewButtonsOnPage = document.querySelectorAll('.view-button');
  var usernname = "";
  var logButtonIndex = (buttonIndex) => { 
  //console.log('buttonIndex:', buttonIndex); 
  usernname = userNameArr[buttonIndex];
  //console.log(usernname); 
  //var data = window.localStorage.setItem('partName', usernname);
  //console.log(data);
 // window.localStorage.setItem('partName', usernname);
  window.localStorage.setItem('partName', usernname);
  //var con = window.localStorage.getItem('partName');
  //console.log(data);
  //console.log(con);
  window.location.assign('admin-participant-review.html');
  }
  for (let j = 0; j < allViewButtonsOnPage.length; j++) { 
  let viewButton = allViewButtonsOnPage[j]; 
  viewButton.addEventListener('click', () => { 
    logButtonIndex(j);
    var myId = (j + 1);
    //console.log(myId);
    window.localStorage.setItem('myId', myId);
  }); 
  }
  // console.log(usersImgId);
  // console.log(userNameArr);
})
.catch((error) => console.error(error));