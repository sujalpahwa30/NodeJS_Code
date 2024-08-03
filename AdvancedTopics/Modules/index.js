const square = require('./square');
const shape = require('./shape');

console.log("Area of the square is", square.area(5));
console.log("Perimeter of the square is", square.perimeter(5));

const myShape = new shape("Hexagon", 6);
myShape.info();