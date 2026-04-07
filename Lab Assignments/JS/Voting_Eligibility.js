/*6. Voting Eligibility
Logic:
If age ≥ 18 → eligible
Example:
Input: 17
Output: Not eligible*/

let age = prompt("Enter the Age: ");

if(age >= 18){
	console.log("Eligible for Vote");
}
else{
	console.log("Not Eligible for Vote");
}