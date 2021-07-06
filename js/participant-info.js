var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("infoSlide");
  var dots = document.getElementsByClassName("dot");
  if (n > 4) {
      document.getElementById("next").disabled = true;
      document.getElementById("next").style.display = 'none';
      document.getElementById("finish").style.display = 'block';
      return;
}
else {
    document.getElementById("next").disabled = false;
    document.getElementById("next").style.display = 'block';
    document.getElementById("finish").style.display = 'none';
}
  if (n < 2) {
      document.getElementById("prev").disabled = true;
      document.getElementById("prev").style.visibility = 'hidden';
}
else {
    document.getElementById("prev").disabled = false;
    document.getElementById("prev").style.visibility = 'visible';
}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}