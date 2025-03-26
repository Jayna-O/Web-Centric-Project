document.addEventListener("DOMContentLoaded", function() {
    let points = parseInt(localStorage.getItem("ecoPoints"));

    if (points > 9) {
        let achievement1 = document.getElementById("green-machine");
        achievement1.style.color = "#49A078";
    }
    if (points > 99) {
        let achievement1 = document.getElementById("resourceful");
        achievement1.style.color = "#49A078";
    }
    if (points > 999) {
        let achievement1 = document.getElementById("sustainable");
        achievement1.style.color = "#49A078";
    }
})