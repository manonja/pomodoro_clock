const pomodoroClock = require("./pomodoroClock.js");

document.getElementById("sessionlength").value = 1;
document.getElementById("breaklength").value = 5;

global.tm = null;

document.getElementById("timer").onclick = function startCounter() {
    global.tm = pomodoroClock.startCounter(
        window,
        document.getElementById("sessionlength").value,
        document.getElementById("breaklength").value,
    );
};
