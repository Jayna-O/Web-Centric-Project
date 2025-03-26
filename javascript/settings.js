let userValid = false;
let oldPassValid = false;
let newPassValid = false;
let phoneValid = false;
let emailValid = false;

let form = document.querySelector("#form");
form.addEventListener("submit", checkForm);

let username = document.querySelector("#username");
let password = document.querySelector("#new_password");
let email = document.querySelector("#email");
let old_password = document.querySelector("#old_password");
let phone = document.querySelector("#phone");

username.addEventListener("input", checkValue);
password.addEventListener("input", checkValue);
email.addEventListener("input", checkValue);
old_password.addEventListener("input", checkValue);
phone.addEventListener("input", checkValue);

let userError = document.querySelector('userError');
let emailError = document.querySelector('emailError');
let oldPassError = document.querySelector('oldPassError');
let newPassError = document.querySelector('newPassError');
let phoneError = document.querySelector('phoneError');

userError.innerHTML = "";
emailError.innerHTML = "";
oldPassError.innerHTML = "";
newPassError.innerHTML = "";
phoneError.innerHTML = "";

function checkValue(){
    let userVal = username.value.trim();
    let emailVal = email.value.trim();
    let oldPassVal = old_password.value.trim();
    let newPassVal = password.value.trim();
    let phoneVal = phone.value.trim();
    const emailPattern = /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //Username Validation
    if (userVal.length === 0) {
        userError.innerHTML = "Username is required.";
        userValid = false;
    }
    else if (userVal.length < 4 || userVal.length > 8) {
        userError.innerHTML = "Username must be between 4 and 8 characters.";
        userValid = false;
    }
    else {
        userError.innerHTML = "";
        userValid = true;
    }
    //New Password Validation
    if (newPassVal === '') {
        newPassError.innerHTML = "Password is required";
        newPassValid = false;
    } else if (newPassVal.length !== 8) {

        newPassError.innerHTML = "Password must be 8 characters";
        newPassValid = false;
    } else {
        newPassError.innerHTML = "";
        newPassValid = true;
    }
    //Old Password Validation
    if (oldPassVal === '') {
        oldPassError.innerHTML = "Old Password is required";
        oldPassValid = false;
    } else if (oldPassVal.length !== 8) {
        oldPassError.innerHTML = "Old Password must be 8 characters";
        oldPassValid = false;
    } else {
        oldPassError.innerHTML = "";
        oldPassValid = true;
    }

    // Email validation
    if (emailVal === '') {
        emailError.innerHTML = "Email is required";
        emailValid = false;
    } else if (!emailPattern.test(emailVal)) {
        emailError.innerHTML = "Email is invalid";
        emailValid = false;
    } else {
        emailValid = true;
    }

    // Phone validation
    if (phoneVal === '') {
        phoneError.innerHTML = "Phone number is required";
        phoneValid = false;
    } else if (!phone.checkValidity()) {
        phoneError.innerHTML = "Phone number is invalid";
        phoneValid = false;
    } else {
        phoneValid = true;
    }
}

function checkForm(event) {
    if (!userValid || !oldPassValid || !emailValid || !newPassValid) {
        event.preventDefault();
    }
}
