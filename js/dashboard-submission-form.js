// THE INPUT ID
var projectName = document.getElementById('projectName');
var projectTagline = document.getElementById('projectTagline');
var projectUSe = document.getElementById('projectUSe');
var projectChallenge = document.getElementById('projectChallenge');
var projectTechnology = document.getElementById('projectTechnology');
var projectLink = document.getElementById('projectLink');
var projectVideoLink = document.getElementById('projectVideoLink');
var projectImage = document.getElementById('projectImage');


// THE ACTIVE INPUT HORIZONTAL BORDER ID
var vR1 = document.getElementById('vR1');
var vR2 = document.getElementById('vR2');
var vR3 = document.getElementById('vR3');
var vR4 = document.getElementById('vR4');
var vR5 = document.getElementById('vR5');
var vR6 = document.getElementById('vR6');
var vR7 = document.getElementById('vR7');
var vR8 = document.getElementById('vR8');


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectName.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'visible';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectTagline.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'visible';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectUSe.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'visible';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectChallenge.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'visible';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectTechnology.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'visible';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectLink.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'visible';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectVideoLink.addEventListener( 'keydown' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'visible';
    vR8.style.visibility = 'hidden';
});


// SHOW HORIZONTAL BORDER ON INPUT KEYDOWN
projectImage.addEventListener( 'click' , function show() {
    // HORIZONTAL BORDER
    vR1.style.visibility = 'hidden';
    vR2.style.visibility = 'hidden';
    vR3.style.visibility = 'hidden';
    vR4.style.visibility = 'hidden';
    vR5.style.visibility = 'hidden';
    vR6.style.visibility = 'hidden';
    vR7.style.visibility = 'hidden';
    vR8.style.visibility = 'visible';
});