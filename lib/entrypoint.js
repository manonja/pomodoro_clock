var pc = require("./pomodoro_clock.js");


document.getElementById("sessionlength").value = 1;

document.getElementById("timer").onclick = function () {
    pc.startCounter(window,
        document.getElementById("sessionlength").value,
        document.getElementById("breaklength").value)
};
