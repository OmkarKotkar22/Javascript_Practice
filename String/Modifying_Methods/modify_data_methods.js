let str = "I Love Javascript";

//replace(searchValue, newValue)
// Returns a new string with the first occurrence of searchValue replaced by newValue
console.log(str.replace("Javascript", "Java"));
// Output: "I Love Java"

//replaceAll(searchValue, newValue)
// Returns a new string with all occurrences of searchValue replaced by newValue
console.log(str.replaceAll('a', 'o'));
// Output: "I Love Jovoscript"

//trim()
// Returns the string with whitespace removed from both ends
let strWithSpaces = "   Hello World!";
console.log(strWithSpaces.trim());
// Output: "Hello World!"

//trimStart()
// Returns the string with whitespace removed from the start
console.log(strWithSpaces.trimStart());
// Output: "Hello World!   "

//trimEnd()
// Returns the string with whitespace removed from the end
console.log(strWithSpaces.trimEnd());
// Output: "   Hello World!"

//padStart(targetLength, padString)
// Pads the current string with another string (repeated, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
console.log(str.padStart(25, "*"));
// Output: "****I Love Javascript"

//padEnd(targetLength, padString)
// Pads the current string with another string (repeated, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.
console.log(str.padEnd(25, "*"));
// Output: "I Love Javascript****"

//split(separator, limit)
// Splits the string into an array of substrings based on the specified separator and limit
console.log(str.split(" "));
// Output: [ 'I', 'Love', 'Javascript' ]

//repeat(count)
// Returns a new string that repeats the original string count times
console.log(str.repeat(2));
// Output: "I Love JavascriptI Love Javascript"