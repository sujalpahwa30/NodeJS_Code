const fs = require('fs');
fs.readFile('./readme.md' , 'utf8' , (err , data) => {
    if(err){
        console.log(err);
        return;
    }
    process.nextTick(() => console.log("Next tick from file read"));
    console.log(data);
});
fs.readFile('./readme.md' , 'utf8' , (err , data) => {
    if(err){
        console.log(err);
        return;
    }
    process.nextTick(() => console.log("Next Tick from file read2"));
    console.log("2:" , data);
});
process.nextTick(() => console.log("Next Tick"));
Promise.resolve().then(() => console.log("Promise1"));
setTimeout(() => console.log("Timer1") , 0);
setImmediate(() => console.log("Immediate callback"));
for(let i = 0; i < 10000000000; i++){}