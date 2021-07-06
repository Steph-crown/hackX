// GETTING THE DATA FROM THE BACKEND 
const headers = {
    'Content-Type': 'application/json',
    'Authorization': "Bearer" + ' ' + localStorage.getItem("pass"),
    'withCredentials': true, 
}
const username = window.localStorage.getItem('teamLeadSubName');
let vidLink = "";
let imageContainer = document.querySelector('.projectDetails_box__submissionTwo');
let imgSrc = "";

let getUser = () => {
    axios.get("https://hackxbackend.herokuapp.com/getuser?username=" + username , { headers: headers })
    .then((response) => {
      var doc = response.data;
      //console.log(doc);
      //console.log(response.data.submission[0]);
      let subName = doc.submission[0].name;
      document.querySelector('#proName').innerHTML = subName;
      let subTagline = doc.submission[0].tagline;
      document.querySelector('#proTag').innerHTML = subTagline;
      let subProblem = doc.submission[0].problem;
      document.querySelector('#proSolves').innerHTML = subProblem;
      let subChallenges = doc.submission[0].challenges;
      document.querySelector('#proChallenge').innerHTML = subChallenges;
      let subTech = doc.submission[0].technologies;
      let subTechnologies = subTech.split(',');
      //console.log(subTechnologies);
      let subLinks = doc.submission[0].links;
      document.querySelector('#proLink').innerHTML = subLinks;
      let subVidLinks = doc.submission[0].vidLinks;
      vidLink  = subVidLinks;
      let subPictures = doc.submission[0].pictures;
        for(var i=0; i<subPictures.length; i++) {
            imgSrc = subPictures[i];
            let imgPane = `
            <div class="projectDetails_box__light">
                <img alt="img" style="margin: 4%;" src=${imgSrc}>
            </div>
            `;
            imageContainer.innerHTML += imgPane;
        }
      let id = 0;
    })
    .catch((error) => console.error(error));
}
const goToVideoLink = () => {
    window.location.href = vidLink;
}
getUser();

