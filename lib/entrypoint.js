const pomodoroClock = require("./pomodoroClock.js");

document.getElementById("sessionLength").value = 25;
document.getElementById("breakLength").value = 5;

// Initialize global values.
global.tm = null;
global.sessionTime = pomodoroClock.convertMinToSec(document.getElementById("sessionLength").value);
global.breakTime = pomodoroClock.convertMinToSec(document.getElementById("breakLength").value);


document.getElementById("timer").onclick = function startCounter() {
    global.tm = pomodoroClock.startCounter(
        document,
        window,
        document.getElementById("sessionLength").value,
        document.getElementById("breakLength").value,
    );
};
