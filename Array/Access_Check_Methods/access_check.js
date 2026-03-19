let a = new Array(10, 20, 30, 40, 50);

// length property
console.log(a.length);
// Output: 5

// at method
console.log(a.at(0)); // Accessing the first element
// Output: 10

for(let i = 0; i < a.length; i++){
    console.log(a.at(i));
}
// Output:
// 10
// 20
// 30
// 40
// 50

//includes method
console.log(a.includes(30));
// Output: true

console.log(a.includes(60));
// Output: false

// indexOf method
console.log(a.indexOf(30));
// Output: 2

console.log(a.indexOf(60));
// Output: -1

// lastIndexOf method
console.log(a.lastIndexOf(30));
// Output: 2

console.log(a.lastIndexOf(60));
// Output: -1