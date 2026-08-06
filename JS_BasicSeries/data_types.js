//Primitive Datatype
//String : call by value all change perform in copy not in original
let str = "Hello World";
console.log(str);

//Number 
const number = 100;
console.log(number);
const num = 99.99;
console.log(num);


//Boolean   
const isLoggedIn = true;
console.log(isLoggedIn);

const isLoggedOut = false;
console.log(isLoggedOut);


//Null
const outsideTemp = null;
console.log(outsideTemp);


//undefined
let userEmail;
console.log(userEmail);

//Symbol
const id = Symbol('123');
const anyId = Symbol('123');
console.log(id==anyId);

//BigInt
const bigNum = 98765434567876588743125334567n;
console.log(typeof bigNum);


//Non-Primitive / Refernce data type
//Array
let myArr = ["Hanuman", "Shaktiman", "Spiderman"];
for (let index = 0; index < myArr.length; index++) {
    let element = myArr[index];
    console.log(element);
}


//Objects
let myObj = {
    name : "Omkar",
    age : "22",
};
console.log(myObj);


//Functions
const myFunc = function(){
    console.log("Hello");
}

log


/*Number: It is one data types where it indicates number format 
bigint: When we want to store big number then we can use it
string: We can store characters, words then we use it
boolean: This is represented the true and false value
null: this is one data type where we can't store then by default value is 0, but some historical reason there type is object
undefined: We can't identify which data can store inside it
symbol
object */

var name = "html";
var name = "css";

function test(name){
    var name =  "I am" + " " + name;
    console.log(name); // react
}

console.log(name); // css
test("react");


let score = "A";

function checkScore(score){
    if(score == "A"){
        console.log("You are a good student");
    } else if(score == "B"){
        console.log("You are a average student");
    }
}

checkScore(score);

//Hoisting
// let names = sname + 1;
// let sname = 33;
// console.log(typeof names);

//shadowing
let personName = 'abc';
function getData() {
let personName = 'xyz'; // shadowing
console.log(personName);
}
// console.log(personName);
getData();

const PName = 'pqr';
function gettingData() {
const PName = 'lmo'; // shadowing
console.log(personName);
}
// console.log(personName);
gettingData();
