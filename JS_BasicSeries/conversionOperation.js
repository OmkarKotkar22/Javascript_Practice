let score = "33asd";

console.log(typeof score);
console.log(typeof(score));

let valueofscore = Number(score);
console.log(typeof valueofscore);
console.log(valueofscore);

// "33" => 33
// "33asd" => NaN
// "true" => 1
// "false" => 0
//undefined => NaN
//null => 0

let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn);
console.log(typeof booleanLoggedIn);


let isLoggedOut = "sdfgh";
let booleanLoggedOut = Boolean(isLoggedOut);
console.log(booleanLoggedOut);

// 1 => true
// 0 => false
// "sdfgh" => true
// "" => false

let num = 33;
let stringNum = String(num);
console.log(stringNum);
console.log(typeof stringNum);