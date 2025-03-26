function saveLog() {
    let input = document.getElementById("action-input");
    if (input.value !== "") {
        increasePoints();
        adjustList();
    }
    
}

function increasePoints() {
    let points = localStorage.getItem("ecoPoints");
    
    // Adjust eco-points

    if (points === null) {
        points = 0;
    } 
    else {
        points = parseInt(points);
    }

    points++;

    localStorage.setItem("ecoPoints", points);

    document.getElementById("circle-number").innerText = points;
}

function adjustList() {

    let currentDate = new Date();
    let list = document.getElementById("log-list");
    let newLog = document.createElement("li");
    let logs =  JSON.parse(localStorage.getItem("logs"))|| [];
    
    newLog.textContent = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} | ` + document.getElementById("action-input").value

    if (document.querySelectorAll("#log-list li").length < 10) {
        list.insertBefore(newLog, list.firstChild);
        logs.unshift(newLog.textContent);
        console.log(logs);
    }
    else {
        let lastItem = document.querySelectorAll("#log-list li")[document.querySelectorAll("#log-list li").length - 1];
        lastItem.remove();
        list.insertBefore(newLog, list.firstChild);
        logs.pop();
        logs.unshift(newLog.textContent);
        console.log(logs);
    }

    localStorage.setItem("logs", JSON.stringify(logs));
}


window.onload = function(){
    let count = localStorage.getItem("ecoPoints") || 0;
    document.getElementById("circle-number").innerText = count;
    
    let list = document.getElementById("log-list");
    let logs = JSON.parse(localStorage.getItem("logs")) || [];
    
    console.log(logs);

    for (let x = 0; x < logs.length; x++) {
        let newLog = document.createElement("li");
        newLog.textContent = logs[x];
        list.appendChild(newLog);
    }
    
};