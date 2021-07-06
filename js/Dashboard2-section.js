window.addEventListener('load', function start() {
    var countDownDate = new Date("November 27, 2020 24:00:00").getTime();

    var x = setInterval(function() {
        var todayDate = new Date().getTime();
        var distance = countDownDate - todayDate;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.querySelector('#sub_section__timeLeft').innerHTML = days + "d:" + hours + "h:" + minutes + "m";
        
        if (distance < 0) {
            clearInterval(x);
            document.querySelector('#sub_section__timeLeft').innerHTML = "0:00:00";
        }
    }, 1000);   
});

// THE BUTTONS ID
var timelineBtn = document.getElementById('timelineBtn');
var announBtn = document.getElementById('announBtn');
var prizesBtn = document.getElementById('prizesBtn');
var overviewBtn = document.getElementById('overviewBtn');


// THE BUTTONS BORDER ID
var tl = document.getElementById('tl');
var al = document.getElementById('al');
var pl = document.getElementById('pl');
var ol = document.getElementById('ol');


// THE SECTIONS ID 
var timeline = document.getElementById('timeline');
var announcement = document.getElementById('announcement');
var prizes = document.getElementById('prizes');
var overview = document.getElementById('overview');


// DISPLAY TIMELINE AND BORDER
timelineBtn.addEventListener('click', function open() {
    // SECTION
    timeline.style.display = 'block';
    announcement.style.display = 'none';
    prizes.style.display = 'none';
    overview.style.display = 'none';

    // COLORS
    timelineBtn.style.color = '#1071F3';
    announBtn.style.color = 'rgba(156, 99, 99, 0.4)';
    prizesBtn.style.color = 'rgba(156, 99, 99, 0.4)';
    overviewBtn.style.color = 'rgba(156, 99, 99, 0.4)';

    // BORDER
    tl.style.display = 'block';
    al.style.display = 'none';
    pl.style.display = 'none';
    ol.style.display = 'none';
});


// DISPLAY ANNOUNCEMENT AND BORDER
    announBtn.addEventListener('click', function open() {
    timeline.style.display = 'none';
    announcement.style.display = 'block';
    prizes.style.display = 'none';
    overview.style.display = 'none';

    // COLORS
    timelineBtn.style.color = 'rgba(156, 99, 99, 0.4)';
    announBtn.style.color = '#1071F3';
    prizesBtn.style.color = 'rgba(156, 99, 99, 0.4)';
    overviewBtn.style.color = 'rgba(156, 99, 99, 0.4)';

    // BORDER
    tl.style.display = 'none';
    al.style.display = 'block';
    pl.style.display = 'none';
    ol.style.display = 'none';
});


// DISPLAY PRIZES AND BORDER
prizesBtn.addEventListener('click', function open() {
    timeline.style.display = 'none';
    announcement.style.display = 'none';
    prizes.style.display = 'block';
    overview.style.display = 'none';

    // COLORS
    timelineBtn.style.color = 'rgba(156, 99, 99, 0.4)';
    announBtn.style.color = 'rgba(156, 99, 99, 0.4)';
    prizesBtn.style.color = '#1071F3';
    overviewBtn.style.color = 'rgba(156, 99, 99, 0.4)';

    // BORDER
    tl.style.display = 'none';
    al.style.display = 'none';
    pl.style.display = 'block';
    ol.style.display = 'none';
});


// DISPLAY ANNOUNCEMENT AND BORDER
overviewBtn.addEventListener('click', function open() {
    timeline.style.display = 'none';
    announcement.style.display = 'none';
    prizes.style.display = 'none';
    overview.style.display = 'block';
    
    // COLORS
    timelineBtn.style.color = 'rgba(156, 99, 99, 0.4)';
    announBtn.style.color = 'rgba(156, 99, 99, 0.4)';
    prizesBtn.style.color = 'rgba(156, 99, 99, 0.4)';
    overviewBtn.style.color = '#1071F3';
    
    // BORDER
    tl.style.display = 'none';
    al.style.display = 'none';
    pl.style.display = 'none';
    ol.style.display = 'block';
});