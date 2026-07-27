// String Operation

const name = "Omkar";
const Repos = "41";

console.log(name + Repos + "Values");
console.log(`Hello I'm ${name} my repo count is ${Repos}`);

const gameName =  new String('Omi-df-ghi');

console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName[3]);
console.log(gameName.__proto__);
console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 3);
console.log(newString);

const anotherstring = gameName.slice(-8, 4);
console.log(anotherstring);

const newStringOne = "   Omkar    ";
console.log(newStringOne.trim());

const url = "https://omkar.com/om%20sharma";
console.log(url.replace('%20', '-'));

console.log(url.includes('1'));

console.log(gameName.split('-'));