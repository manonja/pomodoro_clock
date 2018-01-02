const pomodoroClock = require("./pomodoroClock.js");

// document.getElementById("sessionLength").value = 25;
// document.getElementById("breakLength").value = 5;


function startCounter() {
    document.getElementById("timer").onclick = null;
    pomodoroClock.clockStart(document.getElementById("sessionLength").value, document.getElementById("breakLength").value);
}

function pauseCounter() {
    document.getElementById("pauseButton").onclick = pomodoroClock.clockPause();
}

function resumeCounter() {
    document.getElementById("timer").onclick = !null;
    document.getElementById("resumeButton").onclick = pomodoroClock.clockResume();
}

module.exports.startCounter = startCounter;
module.exports.pauseCounter = pauseCounter;
module.exports.resumeCounter = resumeCounter;
