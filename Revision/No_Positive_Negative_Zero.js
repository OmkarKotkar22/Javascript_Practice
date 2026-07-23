/*1. Positive, Negative, or Zero
Logic:
Check if number > 0, < 0, or equal to 0.
Example:
Input: -5
Output: Negative number*/

let a = prompt("Enter the Number: ");
if(a > 0){
	console.log(a+ " is Positive Number");
}
else if(a< 0){
	console.log(a+ " is Negative Number");
}
else{
	console.log(a + " is Equal to Zero");
}