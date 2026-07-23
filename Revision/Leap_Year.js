/*4. Leap Year
Logic:
 Divisible by 4 AND not by 100
 OR divisible by 400
Example:
Input: 2024
Output: Leap Year*/

let input = prompt("Enter the Year");

if((input % 4 == 0 || input % 100 == 0) && (input % 400 == 0)){
	console.log("Year is Leap year");
}
else{
	console.log("Year is Not Leap year");
}