// var head_drop = document.getElementsByClassName("head_drop");
// var head_section3 = document.getElementsByClassName("navbar_second");
// var reg1 = document.getElementsByClassName("navbar_reg1");


// head_drop[0].addEventListener("click",myfunc1)
// var a = 0;
// function myfunc1(){
		
// head_section3[0].style.height ="365px"		
// head_section3[0].style.width ="auto"				
// head_drop[0].innerHTML ="X"	
// a++;

// if(a%2 === 0){		
// head_section3[0].style.height ="0px"		
// head_section3[0].style.overflow ="hidden"		
// head_drop[0].innerHTML ="&#9776"
// 		}
//  }

let coll = document.getElementsByClassName('drop-btn');
let i;
 
for (i = 0; i < coll.length; i++) {
	coll[i].addEventListener("click", function(){
	 this.classList.toggle("active");
	 let content = this.nextElementSibling;
	 if (content.style.maxHeight) {
	   content.style.maxHeight = null;
	 } else {
	   content.style.maxHeight = content.scrollHeight + "px";
	 }
   });
 }

 const ham = document.querySelector('.hamburger');
 const nav = document.querySelector('.nav-content');
 ham.addEventListener('click', () => {

   if (nav.className === 'nav-content') {
	 nav.classList.add('responsive');
   } else {
	 nav.className = 'nav-content';
   }
 });