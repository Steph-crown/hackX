//navbar
var myham = document.getElementsByClassName("navbar_myham");
var second = document.getElementsByClassName("navbar_second");
var reg1 = document.getElementsByClassName("navbar_reg1");

var a = 0;
function myfunc1() {
  reg1[0].style.opacity = "0";

  second[0].style.height = "325px";
  second[0].style.width = "auto";
  myham[0].innerHTML = "X";
  a++;

  if (a % 2 === 0) {
    second[0].style.height = "0px";
    second[0].style.overflow = "hidden";
    myham[0].innerHTML = "&#9776";
    reg1[0].style.opacity = "1";
  }
}
myham[0].addEventListener("click", myfunc1);

//contact
const contactForm = document.querySelector(".contact-form");
const contactForm_2 = document.querySelector(".contact-input-text");

const showAlert = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".contact-form");
  container.insertBefore(div, contactForm_2);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 9000);
};

const formEvent = contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  const contactInfo = await { name, email, message };
  if (name === "" || email === "" || message === "") {
    showAlert("Please Fill All Fields", "error");
  } else {
    createContact(contactInfo);
  }
});
const createContact = async (contactInfo) => {
  axios
    .post("https://hackxbackend.herokuapp.com/contact", contactInfo)
    .then((response) => {
      response.data;
      if (response.status == "200") {
        if (response.data == "Failed to Save Contact") {
          showAlert("Failed to Save Contact ", "error");
        } else if(response.data == "Successfully Saved Contact"){
          showAlert("Contact Saved", "success"); 
        } else {
          showAlert(response.data, "error");
        }
      } else {
        showAlert("Something Went Wrong. Try Again Later", "error");
      }

      console.log(status.status);
    })

    .catch((error) => console.error(error));
};

// Partners
var indexx = 0;
var smallScreen = document.getElementById('smallScreen');
var largeScreen = document.getElementById('largeScreen');

	window.addEventListener("load", start, false)
	function start(){
		 imagess = ["../assets/images/partner-one.png","../assets/images/partner-three.png", "../assets/images/partner-two.png", "../assets/images/partner-four.png","../assets/images/partner-three.png", "../assets/images/partner-two.png"]
		 captions = ["1", "2", "3", "4", "5", "6"]
		 imgSlide = document.getElementById("imgSlide")
		 dot = document.getElementsByClassName("dot")
		 imgSlide.setAttribute("src", imagess[indexx]);
		 for (i = 0; i < dot.length; i++) {
		 	dot[i].id = "";
		 } 
		 dot[indexx].id = "active";
		 }
		
	function plus(x){
		if (indexx + x < 0){
			indexx = 5
			}
		else if (indexx + x > 5){
			indexx = 0
			}
		else{
			indexx += x
		}
	  start()
		}
	function currentSlide(x){
		indexx = x
		start()
		}
    setInterval( 5000, 1);
