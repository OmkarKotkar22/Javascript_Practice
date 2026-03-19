let str = "Hello";

// charAt(index)
// Returns the character at the given index
console.log(str.charAt(0)); 
// Output: H


// Loop through each character using charAt()
for(let i = 0; i < str.length; i++){
    console.log(str.charAt(i));
}
// Output:
// H
// e
// l
// l
// o


// charCodeAt(index)
// Returns ASCII (UTF-16) code of character at given index
console.log(str.charCodeAt(0)); 
// Output: 72   (ASCII value of 'H')


// String.fromCharCode(value)
// Converts ASCII (UTF-16) code to character
let char = String.fromCharCode(72);
console.log(char);
// Output: H


// String.fromCharCode(value1, value2, ...)
// Converts multiple ASCII values into string
let char2 = String.fromCharCode(72,101,108,108,111);
console.log(char2);
// Output: Hello


// codePointAt(index)
// Returns Unicode code point of character at index
console.log(str.codePointAt(0));
// Output: 72  (same as charCodeAt for normal characters)


// String.fromCodePoint(...values)
// Converts Unicode code points into string
console.log(String.fromCodePoint(72,101,108,108,111));
// Output: Hello


// Unicode Emoji using code point
console.log(String.fromCodePoint(0x1F600));
// Output: 😀


// at(index)
// Returns character at index (supports negative indexing)
console.log(str.at(0));
// Output: H


// at(-1)
// Negative index means from end (-1 = last character)
console.log(str.at(-1));
// Output: o


// Access character using bracket notation
console.log(str[2]);
// Output: l