// JavaScript Event Loop
// JavaScript execution has 3 main categories:

// 1. Synchronous Code
// - Executes first, line by line.
// - Examples: let, const, console.log(), functions.
// 2. Microtasks
// - Execute after synchronous code finishes.
// - Examples: Promise, async/await.
// 3. Macrotasks
// - Execute after microtasks are completed.
// - Examples: setTimeout(), setInterval().
// Execution order: Sync → Microtasks → Macrotasks
// setTimeout() vs setInterval()
// setTimeout()	setInterval()
// Runs once after the specified delay.	Runs repeatedly at the specified interval.
// Uses clearTimeout() to cancel.	Uses clearInterval() to cancel.


console.log("a");

setTimeout(() => {
    console.log("b");
}, 0);

Promise.resolve().then(() => {
    console.log("c");
});

console.log("d");

setTimeout(() => {
    console.log("e");
}, 0);

console.log("f");



