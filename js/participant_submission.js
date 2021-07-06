var helloTxt = document.querySelectorAll('.Hello');
var desctxt = document.querySelectorAll('.description');
let status = document.querySelectorAll('.status');
var dateSubmitted = document.querySelectorAll('.date_submitted');
var dateUpdated = document.querySelectorAll('.date_updated');

for (var j = 0; j < status.length; j++) {
    let vueSub = document.createElement('a');
    let vueTxt = document.createTextNode('View submission');
    vueSub.appendChild(vueTxt);
    status[j].appendChild(vueSub);
    let styles = {
        padding: '3px',
        backgroundColor: '#1071f3',
        color: 'white',
        borderRadius: '5px',
        marginTop: '-3px',
        cursor: 'pointer'
    }
    Object.assign(vueSub.style, styles);
    vueSub.onclick = () => {
        location.assign('submission-submitted-screen.html');
    }
}
/* let vueStyle = '.vueSub:hover {background-color: red}';
let addStyle = document.createElement('style');
if (addStyle.stylesheet) {
    addStyle.stylesheet.cssText = vueStyle;
} else {
    addStyle.appendChild(document.createTextNode(vueStyle))
}
vueSub.appendChild(addStyle);
*/
let subScreen = document.querySelectorAll('.submittedScreen');
for (let a = 0; a < subScreen.length; a++) {
    subScreen[a].addEventListener('click', () => {
        let num = [0];
        let numbers = num.push(a);
        localStorage.setItem('numbers', num);
        location.assign('dashboard-submitted-screen.html');
    })
}

const headers = {
    'Content-type': 'application/json',
    'Authorization': 'Bearer' + ' ' + localStorage.getItem('pass'),
    'withCredentials': true
}
let username = localStorage.getItem('username');
axios.get('https://hackxbackend.herokuapp.com/getuser?username=' + username, { headers: headers })
    .then((response) => {
        // console.log(response.data)
        let resp = response.data;
        for (var k = 0; k < resp.submission.length; k++) {
            let subName = resp.submission[k].name;
            let subProb = resp.submission[k].problem;
            helloTxt[k].textContent = subName;
            desctxt[k].textContent = subProb;
            subScreen[k].style.visibility = 'visible';
            let submittedDate = resp.submission[k].createdAt;
            let editSubmitDate = moment(new Date(submittedDate)).format('MM-DD-YYYY');
            dateSubmitted[k].textContent = editSubmitDate;
            let updatedDate = resp.submission[k].updatedAt;
            let editupdateDate = moment(new Date(updatedDate)).format('MM-DD-YYYY');
            dateUpdated[k].textContent = editupdateDate;
        }
    })
    .catch((error) => { console.error(error) })