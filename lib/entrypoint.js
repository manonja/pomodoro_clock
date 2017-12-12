const pomodoroClock = require("./pomodoroClock.js");

document.getElementById("sessionlength").value = 1;
document.getElementById("breaklength").value = 5;

// Initialize global values.
global.tm = null;
global.sessionTime = pomodoroClock.convertMinToSec(document.getElementById("sessionlength").value);
global.breakTime = pomodoroClock.convertMinToSec(document.getElementById("breaklength").value);


document.getElementById("timer").onclick = function startCounter() {
    global.tm = pomodoroClock.startCounter(
        document,
        window,
        document.getElementById("sessionlength").value,
        document.getElementById("breaklength").value,
    );
};
