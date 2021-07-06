const headerss = {
    'Content-Type': 'text/html',
    'withCredentials': true
};
	
const logOut = async () => {
	axios.get("https://hackxbackend.herokuapp.com/logout", { headers: headerss })
	.then((response) => {
		response.data;
		if (response.status == "200") {
			if(response.data == "Clear localStorage") {
				localStorage.clear();
				window.location.href = "https://hackx.netlify.app/pages/Login";
			}
		}
	})
	.catch((error) => console.error(error));
};

document.querySelector('#logout_user').addEventListener('click', logOut);
// document.querySelector('.logout_user').addEventListener('click', logOut);