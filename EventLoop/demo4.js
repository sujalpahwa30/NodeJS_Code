console.log("Start");
setTimeout(() => {
    process.nextTick(() => console.log("Next Tick2"));
    process.nextTick(() => console.log("Next Tick3"));
    process.nextTick(() => console.log("Next Tick4"));
    Promise.resolve().then(() => console.log("Promise2"));
    Promise.resolve().then(() => console.log("Promise3"));
    Promise.resolve().then(() => console.log("Promise4"));
    for(let i = 0; i < 10000000000; i++){ }
} , 0);
Promise.resolve().then(() => console.log("Promise1"));
process.nextTick(() => console.log("Next Tick1"));
setTimeout(() => console.log("Timer2") , 0);
console.log("End");