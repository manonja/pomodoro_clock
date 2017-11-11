const pc = require("./pomodoro_clock.js");


document.getElementById("sessionlength").value = 1;
document.getElementById("breaklength").value = 5;

document.getElementById("timer").onclick = function startCounter() {
    pc.startCounter(
        window,
        document.getElementById("sessionlength").value,
        document.getElementById("breaklength").value,
    );
};
