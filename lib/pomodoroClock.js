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
function startCounter(window, sessionLength, breakLength) {
    let sessionTime = convertMinToSec(sessionLength);
    let breakTime = convertMinToSec(breakLength);

    const COUNT_DOWN_TIME = 1000;

    /**
    * Update timer on page.
    *
    * @param {Number} timeToPrint what time to print.
    */
    function updateTime() {
        if ((sessionTime + breakTime) >= 0) {
            if (sessionTime >= 0) {
                sessionTime -= 1;
                document.getElementById("timer").innerHTML = timeToString(sessionTime);
            } else {
                breakTime -= 1;
                document.getElementById("timer").innerHTML = timeToString(breakTime);
            }
            window.setTimeout(updateTime, COUNT_DOWN_TIME);
        }
    }

    window.setTimeout(updateTime, COUNT_DOWN_TIME);
}

module.exports.convertMinToSec = convertMinToSec;
module.exports.timeToString = timeToString;
module.exports.startCounter = startCounter;
