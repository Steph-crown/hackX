var imageUrl;
var file;

// CALLING THE IMAGE UPLOAD

document.querySelector("#imageUpload").addEventListener('click', function() {
    document.querySelector("#imageFile").click();
});


// IMAGE UPLOAD SEQUENCE
document.querySelector("#imageFile").addEventListener('change', function() {
    file = this.files[0];
    // VALIDATE IMAGE SIZE
    if(file.size > 2*1024*1024) {
        alert('Error : Exceeded size 2MB');
        return;
    }
    // WHEN IMAGE VALIDATION IS SUCCESSFUL
    // HIDE THE UPLOAD IMAGE 
    document.querySelector("#imageUpload").style.display = 'none';
    // SET THE FILE NAME
    document.querySelector("#imageName").innerText = file.name;
    document.querySelector("#imageName").style.display = 'block';
    // GET THE LOCAL URL
    imageUrl = URL.createObjectURL(file);
    // SET THE LOCAL URL AS THE IMAGE SRC
    document.querySelector("#imagePreview").setAttribute('src', imageUrl);
    document.querySelector("#imagePreview").style.display = 'block';
    // sHOW DELETE BUTTON
    document.querySelector("#deleteImage").style.display = 'block';

    // SO AS NOT TO SHOW UNNECESSARY SCREEN, I MADE A SMALL VALIDATION FOR IT
});
    
// IMAGE 2
document.querySelector("#imageFile").addEventListener('change', function() {
    // USER'S SELECTED IMAGE
    var file = this.files[1];
    // VALIDATE IMAGE SIZE
    try{
        if (file.size > 2*1024*1024) {
            alert('Error : Exceeded size 2MB');
            return;
        }
        // WHEN IMAGE VALIDATION IS SUCCESSFUL
        // HIDE THE UPLOAD IMAGE 
        document.querySelector("#imageUpload1").style.display = 'none';
        // SET THE FILE NAME
        document.querySelector("#imageName1").innerText = file.name;
        document.querySelector("#imageName1").style.display = 'block';
        // GET THE LOCAL URL
        imageUrl = URL.createObjectURL(file);
        // SET THE LOCAL URL AS THE IMAGE SRC
        document.querySelector("#imagePreview1").setAttribute('src', imageUrl);
        document.querySelector("#imagePreview1").style.display = 'block';
        // sHOW DELETE BUTTON
        document.querySelector("#deleteImage1").style.display = 'block';
        var imageUpload1 = document.querySelector('#imageUpload1');
        var imgDiCont1 = document.querySelector('.imgDiCont1');
        if (imageUpload1.src === "") {
            imgDiCont1.style.display = "none";
        } else {
            imgDiCont1.style.display = "block";
        }
    }catch(error){
        let output = "No picture here."
    }
    
});
// IMAGE 3
document.querySelector("#imageFile").addEventListener('change', function() {
    // USER'S SELECTED IMAGE
    var file = this.files[2];
    // VALIDATE IMAGE SIZE
    try{
        if(file.size > 2*1024*1024) {
            alert('Error : Exceeded size 2MB');
            return;
        }
        // WHEN IMAGE VALIDATION IS SUCCESSFUL
        // HIDE THE UPLOAD IMAGE 
        document.querySelector("#imageUpload2").style.display = 'none';
        // SET THE FILE NAME
        document.querySelector("#imageName2").innerText = file.name;
        document.querySelector("#imageName2").style.display = 'block';
        // GET THE LOCAL URL
        imageUrl = URL.createObjectURL(file);
        // SET THE LOCAL URL AS THE IMAGE SRC
        document.querySelector("#imagePreview2").setAttribute('src', imageUrl);
        document.querySelector("#imagePreview2").style.display = 'block';
        // sHOW DELETE BUTTON
        document.querySelector("#deleteImage2").style.display = 'block';
        var imageUpload2 = document.querySelector('#imageUpload2');
        var imgDiCont2 = document.querySelector('.imgDiCont2');
        if (imageUpload2.src === "") {
            imgDiCont2.style.display = "none";
        } else {
            imgDiCont2.style.display = "block";
        }
    }catch(error){
        let output = "No picture here."
    }
});
// IMAGE 4
document.querySelector("#imageFile").addEventListener('change', function() {
    // USER'S SELECTED IMAGE
    var file = this.files[3];
    // VALIDATE IMAGE SIZE
    try{
        if(file.size > 2*1024*1024) {
            alert('Error : Exceeded size 2MB');
            return;
        }
        // WHEN IMAGE VALIDATION IS SUCCESSFUL
        // HIDE THE UPLOAD IMAGE 
        document.querySelector("#imageUpload3").style.display = 'none';
        // SET THE FILE NAME
        document.querySelector("#imageName3").innerText = file.name;
        document.querySelector("#imageName3").style.display = 'block';
        // GET THE LOCAL URL
        imageUrl = URL.createObjectURL(file);
        // SET THE LOCAL URL AS THE IMAGE SRC
        document.querySelector("#imagePreview3").setAttribute('src', imageUrl);
        document.querySelector("#imagePreview3").style.display = 'block';
        // sHOW DELETE BUTTON
        document.querySelector("#deleteImage3").style.display = 'block';
        var imageUpload3 = document.querySelector('#imageUpload3');
        var imgDiCont3 = document.querySelector('.imgDiCont3');
        if (imageUpload3.src === "") {
            imgDiCont3.style.display = "none";
        } else {
            imgDiCont3.style.display = "block";
        }
    }catch(error){
        let output = "No picture here."
    }
});
// IMAGE 5
document.querySelector("#imageFile").addEventListener('change', function() {
    // USER'S SELECTED IMAGE
    var file = this.files[4];
    // VALIDATE IMAGE SIZE
    try{
        if(file.size > 2*1024*1024) {
            alert('Error : Exceeded size 2MB');
            return;
        }
        // WHEN IMAGE VALIDATION IS SUCCESSFUL
        // HIDE THE UPLOAD IMAGE 
        document.querySelector("#imageUpload4").style.display = 'none';
        // SET THE FILE NAME
        document.querySelector("#imageName4").innerText = file.name;
        document.querySelector("#imageName4").style.display = 'block';
        // GET THE LOCAL URL
        imageUrl = URL.createObjectURL(file);
        // SET THE LOCAL URL AS THE IMAGE SRC
        document.querySelector("#imagePreview4").setAttribute('src', imageUrl);
        document.querySelector("#imagePreview4").style.display = 'block';
        // sHOW DELETE BUTTON
        document.querySelector("#deleteImage4").style.display = 'block';
        var imageUpload4 = document.querySelector('#imageUpload4');
        var imgDiCont4 = document.querySelector('.imgDiCont4');
        if (imageUpload4.src === "") {
            imgDiCont4.style.display = "none";
        } else {
            imgDiCont4.style.display = "block";
        }
    }catch(error){
        let output = "No picture here."
    }

});

// DELETE IMAGE
document.querySelector("#deleteImage").addEventListener('click', function(e) {
    e.preventDefault();
    URL.revokeObjectURL(imageUrl);
    document.querySelector("#imageUpload").style.display = 'block';
    document.querySelector("#imageFile").value = '';
    document.querySelector("#imageName").style.display = 'none';
    document.querySelector("#imagePreview").style.display = 'none';
    document.querySelector("#deleteImage").style.display = 'none';
});

//DELETE 2
document.querySelector("#deleteImage1").addEventListener('click', function(e) {
    e.preventDefault();
    URL.revokeObjectURL(imageUrl);
    document.querySelector(".imgDiCont1").style.display = 'none';
    document.querySelector("#imageFile1").value = '';
});
//DELETE 3
document.querySelector("#deleteImage2").addEventListener('click', function(e) {
    e.preventDefault();
    URL.revokeObjectURL(imageUrl);
    document.querySelector(".imgDiCont2").style.display = 'none';
    document.querySelector("#imageFile2").value = '';
});
//DELETE 4
document.querySelector("#deleteImage3").addEventListener('click', function(e) {
    e.preventDefault();
    URL.revokeObjectURL(imageUrl);
    document.querySelector(".imgDiCont3").style.display = 'none';
    document.querySelector("#imageFile3").value = '';
});
//DELETE 5
document.querySelector("#deleteImage4").addEventListener('click', function(e) {
    e.preventDefault();
    URL.revokeObjectURL(imageUrl);
    document.querySelector(".imgDiCont4").style.display = 'none';
    document.querySelector("#imageFile4").value = '';
});