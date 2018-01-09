const pomodoroClock = require("./pomodoroClock.js");
const $ = require("jquery");

function startCounter() {
    document.getElementById("timer").onclick = null;
    pomodoroClock.clockStart($("#sessionLength").val(), $("#breakLength").val());
}

function pauseCounter() {
    pomodoroClock.clockPause();
}

function resumeCounter() {
    pomodoroClock.clockResume();
}

$("#sessionLength").change(() => {
    const currSessionLength = $("#sessionLength").val();
    $("#timer").html(`${currSessionLength}:00`);
});


module.exports.startCounter = startCounter;
module.exports.pauseCounter = pauseCounter;
module.exports.resumeCounter = resumeCounter;
module.exports.startPM = pomodoroClock.clockStart;
