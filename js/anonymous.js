let dashboard_x = document.getElementsByClassName("dashboard_x")
let dashboard_cancel = document.getElementsByClassName("dashboard_cancel")
let dashboard_anonymous = document.getElementsByClassName("dashboard_anonymous")
let anonymous_pic = document.getElementsByClassName("anonymous_pic")


dashboard_x[0].addEventListener("click", dashboard)		

function dashboard() {
dashboard_cancel[0].style.display ="none"
dashboard_anonymous[0].style.display ="none"
		}