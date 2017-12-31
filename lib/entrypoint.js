const pomodoroClock = require("./pomodoroClock.js");

// document.getElementById("sessionLength").value = 25;
// document.getElementById("breakLength").value = 5;


function startCounter() {
    document.getElementById("timer").onclick = null;
    pomodoroClock.clockStart(document.getElementById("sessionLength").value, document.getElementById("breakLength").value);
}


module.exports.startCounter = startCounter;
