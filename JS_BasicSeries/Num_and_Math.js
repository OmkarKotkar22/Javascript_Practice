const score = 400;
//console.log(score); // Output: 400
const balance = new Number(1000);
//console.log(balance); // Output: [Number: 1000]

//console.log(balance.toString()); // Output: "1000"

//console.log(balance.toFixed(2)); // Output: "1000.00"

//console.log(typeof(balance.toString()));

const num = 223.456789;
//console.log(num.toPrecision(5));

const hundred = 10000000;
//console.log(hundred.toLocaleString()); // Output: "10,000,000"




console.log(Math);

console.log(Math.abs(-4));

console.log(Math.round(4.5));

console.log(Math.floor(6.7));

console.log(Math.ceil(5.1));

console.log(Math.min(3,7,2,8));

console.log(Math.max(3,7,2,8));

const randomNum = Math.random();
console.log(randomNum);

console.log((Math.random()*10)+1);

const min = 10;
const max = 20;
const randomNumInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumInRange);