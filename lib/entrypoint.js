const pomodoroClock = require("./pomodoroClock.js");

document.getElementById("sessionlength").value = 1;
document.getElementById("breaklength").value = 5;

global.tm = null;

document.getElementById("timer").onclick = function startCounter() {
    document.getElementById("pause").disabled = true;
    document.getElementById("session").disabled = true;
    global.tm = pomodoroClock.startCounter(
        document,
        window,
        document.getElementById("sessionlength").value,
        document.getElementById("breaklength").value,
    );
};
