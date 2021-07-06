let scrName = document.querySelectorAll('#scrName');
let scrTag = document.querySelector('.txtCnt');
let scrProb = document.querySelector('.scrProb')
let scrChallenge = document.querySelector('#scrChallenge');
let scrLink = document.querySelector('.link');
let scrPictures = document.querySelectorAll('.attachments')

const headers = {
    'Content-type': 'application/json',
    'Authorization': 'Bearer' + ' ' + localStorage.getItem('pass'),
    'withCredentials': true
}
let username = localStorage.getItem('username');
axios.get('https://hackxbackend.herokuapp.com/getuser?username=' + username, { headers: headers })
    .then((response) => {
        let res = response.data;
        // console.log(res);
        var gottenNumbers = localStorage.getItem('numbers')
        var i = gottenNumbers[gottenNumbers.length - 1];
        for (let j = 0; j < scrName.length; j++) {
            scrName[j].textContent = res.submission[i].name;
        }
        scrTag.textContent = res.submission[i].tagline;
        scrProb.textContent = res.submission[i].problem;
        scrChallenge.textContent = res.submission[i].challenges;
        let techUsed = res.submission[i].technologies;
        let techArray = techUsed.split(',');
        let techList = document.querySelector('.techList');
        function newdiv(letter) {
            let newWindow = `
            <span class="techUsed" id='techUsedElse'>${techArray[letter]}</span>
            `
            techList.innerHTML += newWindow
        }
        for (let k = 0; k < techArray.length; k++) {
            newdiv(k);
        }
        scrLink.textContent = res.submission[i].links;
        for (let m = 0; m < res.submission[i].pictures.length; m++) {
            scrPictures[m].innerHTML = res.submission[i].pictures[m];
        }
    })
    .catch((error) => { console.error(error) })
    console.clear();