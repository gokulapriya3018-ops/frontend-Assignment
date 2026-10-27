//javascript run in a three different loop is called event loop

// 1 sync -- let a,let a=5,console.log
// 2 micro -- Promise,async ,await
// 3 macro -- setTimeout,setInterval,requestAnimationFrame
//always sync code will be executed first then micro task and then macro task
//        setTimeout	                  |          setInterval
//Runs once after the timer expires    |  Runs repeatedly at every specified time interval.




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