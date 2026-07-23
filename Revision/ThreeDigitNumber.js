/*9. Three-Digit Number
Logic:
Check if number is between 100 and 999 (or negative equivalent).
Example:
Input: 456
Output: Three-digit number*/

let no = prompt("Enter the Number: ");

if(no >= 100 && no <= 999){
	console.log("Three Digit Number");
}
if(no <= -100 && no >= -999){
	console.log("Three Digit Number");
}
else{
    console.log("Not a three Digit");
}