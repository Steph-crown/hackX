


var j = 25;
document.querySelector('#next').addEventListener('click', function() {
	j += 25;
	document.querySelector('.progress_percent').innerHTML = j + "%";
});
document.querySelector("#prev").addEventListener('click', function() {
	j -= 25;
	document.querySelector('.progress_percent').innerHTML = j + "%";
});