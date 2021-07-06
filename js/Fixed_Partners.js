var indexx = 0;
var smallScreen = document.getElementById("smallScreen");
var largeScreen = document.getElementById("largeScreen");

window.addEventListener("load", start, false);
function start() {
  imagess = [
    "../assets/images/partner-one.png",
    "../assets/images/partner-three.png",
    "../assets/images/partner-two.png",
    "../assets/images/partner-four.png",
    "../assets/images/partner-three.png",
    "../assets/images/partner-two.png",
  ];
  captions = ["1", "2", "3", "4", "5", "6"];
  imgSlide = document.getElementById("imgSlide");
  dot = document.getElementsByClassName("dot");
  imgSlide.setAttribute("src", imagess[indexx]);
  for (i = 0; i < dot.length; i++) {
    dot[i].id = "";
  }
  dot[indexx].id = "active";
}

function plus(x) {
  if (indexx + x < 0) {
    indexx = 5;
  } else if (indexx + x > 5) {
    indexx = 0;
  } else {
    indexx += x;
  }
  start();
}
function currentSlide(x) {
  indexx = x;
  start();
}
setInterval(5000, 1);
