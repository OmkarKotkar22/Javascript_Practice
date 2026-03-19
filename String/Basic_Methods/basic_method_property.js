let string = "Hello, World!";

// length property
// Returns the total number of characters in the string (including spaces and punctuation)
console.log(string.length);
// Output: 13


// String(value)
// Converts any value (number, boolean, etc.) into a string (primitive type)
let str = String(123);
console.log(str);
// Output: "123"


// new String(value)
// Creates a String OBJECT (not primitive)
let s = new String("Hello Javascript");
console.log(s);
// Output: [String: 'Hello Javascript']  (object representation)


// typeof operator
// Used to check the data type of variable

console.log(typeof string);
// Output: string   (primitive string)

console.log(typeof str);
// Output: string   (primitive string)

console.log(typeof s);
// Output: object   (because created using 'new')


// instanceof operator
// Checks whether an object belongs to a specific class
console.log(s instanceof String);
// Output: true