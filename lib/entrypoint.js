const pomodoroClock = require("./pomodoroClock.js");

function startCounter() {
    document.getElementById("timer").onclick = null;
    pomodoroClock.clockStart(document.getElementById("sessionLength").value, document.getElementById("breakLength").value);
}

function pauseCounter() {
    pomodoroClock.clockPause();
}

function resumeCounter() {
    pomodoroClock.clockResume();
}

module.exports.startCounter = startCounter;
module.exports.pauseCounter = pauseCounter;
module.exports.resumeCounter = resumeCounter;
module.exports.startPM = pomodoroClock.clockStart;
