const Avatar = async () => {
	function randomRange(myMin, myMax) {
	  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
	}
	const avatar = document.querySelector(".head_pic02"); 
	let avatarArray = ["amber", "blue", "blueGrey", "brown", "cyan", "deepOrange", "deepPurple", "green", "grey", "indigo", "lightBlue", "lightGreen", "lime", "orange", "pink", "purple", "red", "teal", "yellow"]
	let avatarId = localStorage.getItem("id");
	avatar.src = "https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=" + avatarArray[avatarId[0]];           
	const avatar2 = document.querySelector(".head_pic03"); 
	avatar2.src = avatar.src;
};  

// avatarArray[randomRange(0, 19)]
Avatar();