// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// someFunction = function (){
//     console.log('Something has happened!');
// }
// myEmitter.on('Some event', someFunction);

// myEmitter.emit('Some event');

// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// let n = 0;
// someFunction = function (){
//     n++;
//     console.log(`Value of n is: ${n}`);
// }

// myEmitter.once('event', someFunction);

// myEmitter.emit('event');
// myEmitter.emit('event');
// myEmitter.emit('event');

// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();

// handleError = function (errorCode) {
//     console.error('Woah, there was an error! \n Error code: ', errorCode);
// }

// myEmitter.on('error', handleError);
// myEmitter.emit('error', 9);

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on("order", (food) => {
    console.log("Order received for: ", food);
});
myEmitter.on("doorbell", () => {
    console.log("RING RING!");
});
myEmitter.on("payment", (food) => {
    console.log("Enjoy your", food);
});
