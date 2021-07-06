
var userName = localStorage.getItem('username');
// console.log(userName);
var displayUserName1 = document.querySelector('.name');
var displayUserName2 = document.querySelector('.user_username');
var displayUserName3 = document.querySelector('.welcome_username');
if ( userName == undefined ) {
	// alert('Username not available');
}else{
	displayUserName1.innerHTML = userName;
	displayUserName2.innerHTML = userName;
	displayUserName3.innerHTML = userName;
}