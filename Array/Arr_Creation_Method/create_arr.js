let a = new Array(5);
console.log(a);
// Output: [ <5 empty items> ]

let b = new Array(1,2,3,4,5);
console.log(b);
// Output: [ 1, 2, 3, 4, 5 ]

let c = Array.from("Hello");
console.log(c);
// Output: [ 'H', 'e', 'l', 'l', 'o' ]

let d = Array.of(1,2,3,4,5);
console.log(d);
// Output: [ 1, 2, 3, 4, 5 ]

let e = Array.from([1,2,3], x => x*2);
console.log(e);
// Output: [ 2, 4, 6 ]

let f = Array.from({length:5}, (_,i) => i+1);
console.log(f);
// Output: [ 1, 2, 3, 4, 5 ]