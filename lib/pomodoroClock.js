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
 * Converts time from seconds to minutes
 *
 * @param {Number} timeSec the time to convert
 * @returns {Number} time in minutes
 */
function convertSecToMin(timeSec) {
    return timeSec / 60;
}

/**
 * Print time in div in a MM:SS format
 *
 * @param {Number} time in seconds
 * @returns {String} the converted string
 */
function timeToString(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.round(time % 60);
    const pad = (seconds < 10) ? "0" : "";

    return `${minutes}:${pad}${seconds}`;
}

const Clock = {
    COUNT_DOWN_TIME: 1000,

    start(sessionLength, breakLength) {
        window.sessionTime = convertMinToSec(sessionLength);
        window.breakTime = convertMinToSec(breakLength);
        window.interval = setInterval(() => {
            if ((window.sessionTime + window.breakTime) >= 1) {
                if (window.sessionTime >= 1) {
                    window.sessionTime -= 1;
                    $("#timer").html(timeToString(window.sessionTime));
                } else {
                    window.breakTime -= 1;
                    $("#timer").html(timeToString(window.breakTime));
                }
            } else {
                // reached end
                clearInterval(window.interval);
                delete window.interval;
                EntryPoint.startCounter();
            }
        }, 100);
    },

    pause() {
        clearInterval(window.interval);
        delete window.interval;
    },

    resume() {
        // make sure the counter start where it stopped over
        if (!window.interval) {
            const currSessionTime = convertSecToMin(window.sessionTime);
            const currBreakTime = convertSecToMin(window.breakTime);
            EntryPoint.startPM(currSessionTime, currBreakTime);
        }
    },
};

module.exports.convertMinToSec = convertMinToSec;
module.exports.timeToString = timeToString;
module.exports.clockStart = Clock.start;
module.exports.clockPause = Clock.pause;
module.exports.clockResume = Clock.resume;
