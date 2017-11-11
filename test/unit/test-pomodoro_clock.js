import test from "ava";
import pomodoroClock from "../../lib/pomodoro_clock";

test("converts 1 minute to 60 seconds", (t) => {
    t.equal(pomodoroClock.convertMinToSec(1), 60);
});

test("converts 10 seconds into '0:10'", (t) => {
    t.equal(pomodoroClock.timeToString(10), "0:10");
});

test("converts 69 seconds into '1:09'", (t) => {
    t.equal(pomodoroClock.timeToString(69), "1:09");
});
