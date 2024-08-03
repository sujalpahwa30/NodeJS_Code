let a = 10;
Promise.resolve().then(() => console.log("Printing from promise"));
process.nextTick(() => console.log("Printing from nextTick"));
process.nextTick(() => console.log("Printing from nextTick1"));
process.nextTick(() => console.log("Printing from nextTick2"));
setTimeout(() => console.log("Printing from timer") , 0);
for(let i = 0; i < 10000000000; i++){ }
console.log(a);