let S = "Hello, World! Welcome to JavaScript programming.";

console.log(S.valueof());
// Output: Hello, World! Welcome to JavaScript programming.

console.log(S.toLocaleString());
// Output: Hello, World! Welcome to JavaScript programming.

console.log(S.toString());
// Output: Hello, World! Welcome to JavaScript programming.

console.log(typeof S.valueOf());
// Output: string

console.log(typeof S.toLocaleString());
// Output: string

console.log(typeof S.toString());
// Output: string

console.log(S.valueOf() === S);
// Output: true

console.log("a".localeCompare("b"));
// Output: -1

console.log("b".localeCompare("a"));
// Output: 1

console.log("a".localeCompare("a"));
// Output: 0

console.log("é".normalize());