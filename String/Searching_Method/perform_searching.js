let str = "I Love Javascript";

// indexOf(searchValue, fromIndex)
// Returns the index of the first occurrence of searchValue, or -1 if not found
console.log(str.indexOf("Love"));
// Output: 2

// lastIndexOf(searchValue, fromIndex)
// Returns the index of the last occurrence of searchValue, or -1 if not found
console.log(str.lastIndexOf("a"));
// Output: 10 (last 'a' in "Javascript")

// includes(searchValue, fromIndex)
// Returns true if searchValue is found in the string, otherwise false
console.log(str.includes("Love"));
// Output: true

// startsWith(searchValue, position)
// Returns true if string starts with searchValue at given position (default 0)
console.log(str.startsWith("I"));
// Output: true


// startsWith(searchValue, position)
// Returns true if string starts with searchValue at given position (default 0)
console.log(str.startsWith("Javascript",7));
// Output: true

// endsWith(searchValue, length)
// Returns true if string ends with searchValue considering string length (default full length)
console.log(str.endsWith("Javascript"));
// Output: true

// endsWith(searchValue, length)
// Returns true if string ends with searchValue considering string length (default full length)
console.log(str.endsWith("Love", 6));
// Output: true (considers only "I Love")

// search(searchValue)
// Searches for searchValue using regular expression and returns index, or -1 if not found
console.log(str.search(/Love/));
// Output: 2

// search(searchValue)
// Searches for searchValue using regular expression and returns index, or -1 if not found
console.log(str.search(/ /));
// Output: 1 (first space at index 1)


// match(searchValue)
// /a/: The search pattern. It looks specifically for the lowercase letter "a".
//g flag: Stands for "global". 
// Without g: The search stops after the first "a" it finds and returns an array with extra details (like index).
// With g: The search continues through the entire string and returns an array of all matches found.
// Returns an array of matches for searchValue using regular expression, or null if no match
console.log(str.match(/a/));
// Output: [ 'a', index: 8, input: 'I Love Javascript' ] (first 'a' match)

console.log(str.match(/a/g));
// Output: [ 'a', 'a' ] (all 'a' matches in the string)

// matchAll(searchValue)
// Returns an iterator of all matches for searchValue using regular expression, including capturing groups
console.log(str.matchAll(/a/g));
// Output: [object RegExpStringIterator] (iterator of matches)
