/*7. Divisible by 5 and 11
Logic:
Check number % 5 == 0 AND number % 11 == 0
Example:
Input: 55
Output: Divisible by both*/

let number = prompt("Enter the Number: ");
if(number % 5 == 0 && number % 11 == 0){
	console.log(number + " is Divible by both");
}
else{
	console.log(number + " is not divisible by both");
}