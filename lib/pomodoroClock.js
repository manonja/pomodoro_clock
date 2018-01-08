const $ = require("jquery");
const EntryPoint = require("./entrypoint.js");

/**
 * Converts time from minutes to seconds
 *
 * @param {Number} timeMin the time to convert
 * @returns {Number} time in seconds
 */
function convertMinToSec(timeMin) {
    return timeMin * 60;
}

/**
 * Print time in div in a MM:SS format
 *
 * @param {Number} time in seconds
 * @returns {String} the converted string
 */
function timeToString(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const pad = (seconds < 10) ? "0" : "";

    return `${minutes}:${pad}${seconds}`;
}


/**
 * Counts down an amount of time, first session and then a break.
 *
 * @param {Number} sessionLength session length in minutes
 * @param {Number} breakLength break length in minutes
 */
// function startCounter(doc, win, sessionLength, breakLength) {
//     let tm = null;
//     let stop = false;
//     // TODO: remove global for sessionTime and breakTime
//     global.sessionTime = convertMinToSec(sessionLength);
//     global.breakTime = convertMinToSec(breakLength);
//     const COUNT_DOWN_TIME = 10;
//     function stopCounter() {
//         stop = true;
//     }
//     doc.getElementById("timer").onclick = stopCounter;
//     function resumeCounter() {
//         stop = false;
//     }
//     /**
//     * Update timer on page.
//     *
//     * @param {Number} timeToPrint what time to print.
//     */
//     function updateTime() {
//         // Normal increments
//         if (stop) {
//             win.clearInterval(tm);
//             // TODO resume timer if timer clicked again
//             doc.getElementById("timer").onclick = resumeCounter;
//         } else if ((global.sessionTime + global.breakTime) >= 0) {
//             if (global.sessionTime >= 0) {
//                 global.sessionTime -= 1;
//                 $("#timer").html(timeToString(global.sessionTime));
//             } else {
//                 global.breakTime -= 1;
//                 $("#timer").html(timeToString(global.breakTime));
//             }
//         } else {
//             // End of counter was reached.
//             win.clearInterval(tm);
//             // Reset the counter values to the original values
//             document.getElementById("timer").onclick = EntryPoint.startCounter();
//         }
//     }
//     tm = window.setInterval(updateTime, COUNT_DOWN_TIME);
//     return tm;
// }
const Clock = {
    sessionTime: 0,
    breakTime: 0,
    remaining: 0,
    COUNT_DOWN_TIME: 1000,

    start(sessionLength, breakLength) {
        const self = this;
        this.sessionTime = convertMinToSec(sessionLength);
        this.breakTime = convertMinToSec(breakLength);
        this.interval = setInterval(() => {
            if ((self.sessionTime + self.breakTime) >= 1) {
                if (self.sessionTime >= 1) {
                    self.sessionTime -= 1;
                    $("#timer").html(timeToString(self.sessionTime));
                } else {
                    self.breakTime -= 1;
                    $("#timer").html(timeToString(self.breakTime));
                }
            } else {
                // reached end
                clearInterval(self.interval);
                delete self.interval;
                EntryPoint.startCounter();
            }
        }, 100);
    },

    pause() {
        clearInterval(this.interval);
        // this.remaining = this.interval;
        delete this.interval;
    },

    resume() {
        // make sure the counter start where it stopped over
        if (!this.interval) {
            EntryPoint.startCounter();
        }
    },
};

module.exports.convertMinToSec = convertMinToSec;
module.exports.timeToString = timeToString;
module.exports.clockStart = Clock.start;
module.exports.clockPause = Clock.pause;
module.exports.clockResume = Clock.resume;
