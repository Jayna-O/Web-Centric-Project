let firstValid = false;
let lastValid = false;
let emailValid = false;

let contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", checkForm);

let firstWidget = document.querySelector("#first");
firstWidget.addEventListener("input", checkName);

let lastWidget = document.querySelector("#last");
lastWidget.addEventListener("input", checkName);

let emailWidget = document.querySelector("#email");
emailWidget.addEventListener("input", checkName);




function checkName(){
    let firstName = firstWidget.value.trim();
    firstValid = firstName.length > 0; 
    let lastName = lastWidget.value.trim();
    lastValid = lastName.length > 0; 
    let emailInput = emailWidget.value.trim();
    emailValid = emailInput.length > 0; 
   
    if (firstValid) {
        firstWidget.style.backgroundColor = "initial";
    }
    else {
        firstWidget.style.backgroundColor = "yellow";
    }
    if (lastValid) {
        lastWidget.style.backgroundColor = "initial";
    }
    else {
        lastWidget.style.backgroundColor = "yellow";
    }
    if (emailValid) {
        emailWidget.style.backgroundColor = "initial";
    }
    else {
        emailWidget.style.backgroundColor = "yellow";
    }
}
function checkForm(event) {
    if (!firstValid || !lastValid || !emailValid) {
        window.alert("Fill in Missing Information")
        event.preventDefault();
    }
}