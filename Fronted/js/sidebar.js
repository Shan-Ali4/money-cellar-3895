let closePincode = document.querySelector("#close");
let closeLogin = document.querySelector(".login-sliderbar .close");
let slidebarLayout = document.querySelector(".slidebar-background");
let pincodesSidebar = document.querySelector(".pincode-slidebar");
let loginSidebar = document.querySelector(".login-sliderbar");

closePincode.addEventListener('click', closePincodesSidebar);
closeLogin.addEventListener('click', closeLoginSidebar);

document.querySelector("#pincode").addEventListener('click', function() {
  slidebarLayout.style.display = "block";
  pincodesSidebar.style.display = "block";
});

document.querySelector("#phone").addEventListener('click', function() {
  slidebarLayout.style.display = "block";
  loginSidebar.style.display = "block";
});

function closePincodesSidebar() {
  slidebarLayout.style.display = "none";
  pincodesSidebar.style.display = "none";
}

function closeLoginSidebar() {
  slidebarLayout.style.display = "none";
  loginSidebar.style.display = "none";
}

// let pincodeForm = document.querySelector(".pincode-slidebar form");

let pincodeForm = document.querySelector(".slidebar-background form") 
pincodeForm.addEventListener('submit',function(e){
    e.preventDefault()
    if(pincodeForm.pincode.value != ""){
        console.log(pincodeForm.pincode.value)
    }
})