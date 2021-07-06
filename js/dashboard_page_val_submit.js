

function validateInput() {
    if(bioCntInput.length < 5 && bioCntInput.length > 50 && genderValue.length < 1 && phoneNoVal.length < 10 && 
      phoneNoVal.length > 11 && trackVal.length < 1 
      //&& institutionCntVal.length < 1 && departmentCntVal.length < 1 && 
    //   biodataImg.value.length < 1
    ) {
        document.querySelector('#finish').disabled = true;
        /* console.log("nothing here");
        console.log(bioCntInput);
        console.log(genderValue);
        console.log(phoneNoVal);
        console.log(trackVal);
        console.log(institutionCntVal);
        console.log(departmentCntVal);
        console.log(biodataImg,value);
        */
    } else {
        document.querySelector('#finish').disabled = false;
        // console.log("filled here");
    }
    // console.log("validated");
};

// for bio 
var bioCnt = document.querySelector("#bio");
bioCnt.value = bioCnt.value.replace(/^\s*|\s*$/g,'');
let counter = document.querySelector('#count');
var bioCntInput = "";

bioCnt.oninput = () => {
    bioCntInput = bioCnt.value;
    bioCntInput = bioCntInput.replace(/(^\s*)|(\s*$)/gi,"");
    bioCntInput = bioCntInput.replace(/[ ]{2,}/gi," ");
    bioCntInput = bioCntInput.replace(/\n /,"\n");
    var count = (bioCntInput.split(" ").length);
    counter.innerHTML = count + ' / 50 Words';
    if(count > 50) {
        //bioCnt.disabled = true;
        showLoginAlert("You can't type in more than 50 words", "error"); 
    }
    if (bioCnt.value.length == 0) {
        counter.innerHTML = '0 / 50 Words';
    }
};

// radio
var genderValue = "";
let radioOne = document.querySelector('#rad1');
let radioTwo = document.querySelector('#rad2');
let radioValueM = () => {
    genderValue = "male";
    // console.log(genderValue);
}
let radioValueF = () => {
    genderValue = "female";
    // console.log(genderValue);
}
var phoneNo = document.querySelector('#phoneNo');
var phoneNoVal = "";
phoneNo.oninput = () => {
    phoneNoVal = phoneNo.value;
    // console.log(phoneNoVal);
}
let biodataImg = document.querySelector('#imageFile');

function validateInput() {
    if(bioCntInput.length < 5 && bioCntInput.length > 50 && genderValue.length < 1 && phoneNoVal.length < 10 && 
       phoneNoVal.length > 11 && trackVal.length < 1 && institutionCntVal.length < 1 && departmentCntVal.length < 1 && 
      biodataImg.value.length < 1) {
        document.querySelector('#finish').disabled = true;
    } else {
        document.querySelector('#finish').disabled = false;
    }
};

// track
let trackVal = "";
let ValidateTrack = () => {  
    var checkboxes = document.getElementsByName("track");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems > 1)  
    {  
      showLoginAlert("You can't select more than one track!", "error");  
      return false;  
    }  
} 
const popUp = document.querySelector(".response-bar");
const Submit = document.querySelector(".submit_popup__btn");

const showLoginAlert = (message, className) => {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".participant-info");
  container.insertBefore(div, popUp);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 12000);
};