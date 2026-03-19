let string = "Hello World! Welcome to JavaScript programming.";

// Using split() method to split the string into an array of words
let words = string.split(" ");
console.log(words);
// Output: [ 'Hello', 'World!', 'Welcome', 'to', 'JavaScript', 'programming.' ]

let char = string.split('');
console.log(char);
// Output: [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', ' ', 'W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ' ', 'p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'i', 'n', 'g', '.' ]

console.log(string.split("o"));
// Output: [ 'Hell', ' W', 'rld! Welc', 'me t', ' JavaScript pr', 'gramming.' ]

let sentences = string.split("!");
console.log(sentences);
// Output: [ 'Hello World', ' Welcome to JavaScript programming.' ]

let limitedSplit = string.split( " ", 3);
console.log(limitedSplit);
// Output: [ 'Hello', 'World!', 'Welcome' ]

let regexSplit = string.split(/[\s,.!]/);
console.log(regexSplit);
// Output: [ 'Hello', 'World', 'Welcome', 'to', 'JavaScript', 'programming' ]

let emptySplit = string.split("");
console.log(emptySplit);
// Output: [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!', ' ', 'W', 'e', 'l', 'c', 'o', 'm', 'e', ' ', 't', 'o', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ' ', 'p', 'r', 'o', 'g', 'r', 'a', 'm', 'm', 'i', 'n', 'g', '.' ]

let noDelimiterSplit = string.split();
console.log(noDelimiterSplit);
// Output: [ 'Hello World! Welcome to JavaScript programming.' ]

console.log("12345".split(""));
// Output: [ '1', '2', '3', '4', '5' ]

console.log("apple,banana,orange".split(","));
// Output: [ 'apple', 'banana', 'orange' ]

console.log("one,two,three,four".split(",", 2));
// Output: [ 'one', 'two' ]

console.log("one-two-three".split("-"));
// Output: [ 'one', 'two', 'three' ]