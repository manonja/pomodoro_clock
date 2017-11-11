var pomodoro_clock = {};

/**
 * Converts time from minutes to seconds
 *
 * @param {Number} timeMin the time to convert
 * @returns {Number} time in seconds
 */
pomodoro_clock.convertMinToSec = function(timeMin) {
    return timeMin * 60;
};


/**
 * Count down Clock
 *
 * @param {Number} countDownTime amount of time to count down from
 */
pomodoro_clock.countDownClock = function(window, countDownTime) {

    const COUNT_DOWN_TIME = 10;
    var tm = window.setTimeout(updateTime, COUNT_DOWN_TIME);

    /**
     * Update timer on page.
     *
     * @param {Number} timeToPrint what time to print.
     */
    function updateTime() {
        countDownTime--;
        if(countDownTime >= 0) {
            document.getElementById("timer").innerHTML = pomodoro_clock.timeToString(countDownTime);
            window.setTimeout(updateTime, COUNT_DOWN_TIME);
        }
    }

};

/**
 * Counts down an amount of time, first session and then a break.
 *
 * @param {Number} sessionLength session length in minutes
 * @param {Number} breakLength break length in minutes
 */
pomodoro_clock.startCounter = function(window, sessionLength, breakLength) {
    var sessionTime = pomodoro_clock.convertMinToSec(sessionLength);
    var breakTime = pomodoro_clock.convertMinToSec(breakLength);

    pomodoro_clock.countDownClock(window, sessionTime);
    pomodoro_clock.countDownClock(window, breakTime);
};

/**
 * Print time in div in a MM:SS format
 *
 * @param {Number} time in seconds
 * @returns {String} the converted string
 */
pomodoro_clock.timeToString = function(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    var pad = (seconds < 10) ? "0" : "";

    return minutes + ":" + pad + seconds;
};

module.exports = pomodoro_clock;
