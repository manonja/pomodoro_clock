const pomodoroClock = require("./pomodoroClock.js");
const $ = require("jquery");

function pauseCounter() {
    // Anonymous function implements the resumption of the counter.
    document.getElementById("timer").onclick = () => {
        document.getElementById("timer").onclick = pauseCounter;
        pomodoroClock.clockResume();
    };
    pomodoroClock.clockPause();
}

function startCounter() {
    document.getElementById("timer").onclick = pauseCounter;
    pomodoroClock.clockStart($("#sessionLength").val(), $("#breakLength").val());
}

$("#sessionLength").change(() => {
    const currSessionLength = $("#sessionLength").val();
    $("#timer").html(`${currSessionLength}:00`);
});


module.exports.startCounter = startCounter;
module.exports.pauseCounter = pauseCounter;
module.exports.startPM = pomodoroClock.clockStart;
