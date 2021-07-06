var countDownDate = new Date("June 23, 2021 17:35:00").getTime();

var x = setInterval(function() {
	var todayDate = new Date().getTime();
	var distance = countDownDate - todayDate;
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	document.querySelector('#sub_section__timeLeft').innerHTML = days + "d:" + hours + "h:" + minutes + "m";
	
	if (distance < 0) {
		clearInterval(x);
		document.querySelector('#sub_section__timeLeft').innerHTML = "EXPIRED";
	}
}, 1000);