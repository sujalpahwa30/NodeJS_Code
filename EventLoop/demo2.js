console.log("Start");
setTimeout(() => console.log("Timer 1") , 0);
Promise.resolve().then(() => console.log("Promise1"));
process.nextTick(() => console.log("Next Tick1"));
setTimeout(() => console.log("Timer2") , 0);
process.nextTick(() => console.log("Next Tick2"));
for(let i = 0; i < 10000000000; i++){

}
console.log("End");