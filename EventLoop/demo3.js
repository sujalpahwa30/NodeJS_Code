// console.log("Start");
// setTimeout(() => {
//     process.nextTick(() => console.log("Next Tick2"));
// } , 0);
// Promise.resolve().then(() => console.log("Promise1"));
// process.nextTick(() => console.log("Next Tick1"));
// setTimeout(() => console.log("Timer2") , 0);
// console.log("End");

console.log("Start");
setTimeout(() => {
    Promise.resolve().then(() => console.log("Promise2"));
} , 10);
Promise.resolve().then(() => console.log("Promise1"));
setTimeout(() => console.log("In the middle") , 10);
process.nextTick(() => console.log("Next Tick1"));
setTimeout(() => console.log("Timer2") , 10);
console.log("End");