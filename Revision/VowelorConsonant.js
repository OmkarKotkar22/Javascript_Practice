/*5. Vowel or Consonant
Logic:
Check if character is a, e, i, o, u (case-insensitive).
Example:
Input: e
Output: Vowel
*/

let input = prompt("Enter the Character");

if(input == 'a' || input == 'a' || input == 'e' || input == 'i' || input == 'o' || input == 'u'){
	console.log(input + " character is Vowel");
}
else{
	console.log(input + " character is Consonant");
}