import test from "ava";
import pomodoroClock from "../../lib/pomodoroClock";

test("converts 1 minute to 60 seconds", (t) => {
    t.is(pomodoroClock.convertMinToSec(1), 60);
});

test("converts 10 seconds into '0:10'", (t) => {
    t.is(pomodoroClock.timeToString(10), "0:10");
});

test("converts 69 seconds into '1:09'", (t) => {
    t.is(pomodoroClock.timeToString(69), "1:09");
});
