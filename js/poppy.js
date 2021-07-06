let popUp = document.querySelector('#close-cont');
let poppy = localStorage.getItem("seenPopup");
if(poppy == "checked") {
    popUp.style.display = "none";
}
let closeBtn = document.querySelector('#close_image');
closeBtn.onclick = function() {
    popUp.style.transition = '.5s ease-in-out';
    popUp.style.opacity = '0';
    popUp.style.display = 'none';
    localStorage.setItem("seenPopup", "checked");
    console.log('close');
}