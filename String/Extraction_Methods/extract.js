let str = "I Love Javascript";

// charAt(index)
// Returns the character at the specified index
console.log(str.charAt(2));
// Output: "L"

// charCodeAt(index)
// Returns the Unicode of the character at the specified index
console.log(str.charCodeAt(2));
// Output: 76 (Unicode for 'L') 

// concat(string2, string3, ..., stringN)
// Combines the text of two or more strings and returns a new string
console.log(str.concat(" is great!"));
// Output: "I Love Javascript is great!"

// slice(beginIndex, endIndex)
// Extracts a section of the string and returns it as a new string
console.log(str.slice(2,6));
// Output: "Love"

console.log(str.slice(-6));
// Output: "script" (last 6 characters of the string)

// substring(indexStart, indexEnd)
// Returns the part of the string between the start and end indexes, or to the end of the string
console.log(str.substring(2,11));
// Output: "Love Java"

console.log(str.substring(4));
// Output: "ve Javascript" (from index 4 to the end of the string)


// substr(start, length)
// Returns a portion of the string, starting at the specified index and extending for a given number of characters
console.log(str.substr(2,4));
// Output: "Love"