const {
    describe,
    it
} = require("mocha");
const {
    expect
} = require("chai");

var pomodoro_clock = require("../../lib/pomodoro_clock.js");

describe("Pomodoro clock", function () {
    describe("Minute to second conversion", function () {
        it("converts 1 minute to 60 seconds", function () {
            expect(pomodoro_clock.convertMinToSec(1)).to.equal(60);
        });
    });
    describe("Time to string conversion", function () {
        it("converts 10 seconds into '0:10'", function () {
            expect(pomodoro_clock.timeToString(10)).to.equal("0:10");
        });
        it("converts 69 seconds into '1:09'", function () {
            expect(pomodoro_clock.timeToString(69)).to.equal("1:09");
        });

    });
});
