const $ = require("jquery");

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
function startCounter(doc, win, sessionLength, breakLength) {
    // TODO: remove global for sessionTime and breakTime
    global.sessionTime = convertMinToSec(sessionLength);
    global.breakTime = convertMinToSec(breakLength);

    const COUNT_DOWN_TIME = 10;

    /**
    * Update timer on page.
    *
    * @param {Number} timeToPrint what time to print.
    */
    function updateTime() {
        if ((global.sessionTime + global.breakTime) >= 0) {
            if (global.sessionTime >= 0) {
                global.sessionTime -= 1;
                $("#timer").innerHTML = timeToString(global.sessionTime);
            } else {
                global.breakTime -= 1;
                $("#timer").innerHTML = timeToString(global.breakTime);
            }
            const tm = win.setTimeout(updateTime, COUNT_DOWN_TIME);

            return tm;
        }
        return null;
    }

    const tm = window.setTimeout(updateTime, COUNT_DOWN_TIME);

    return tm;
}


module.exports.convertMinToSec = convertMinToSec;
module.exports.timeToString = timeToString;
module.exports.startCounter = startCounter;
