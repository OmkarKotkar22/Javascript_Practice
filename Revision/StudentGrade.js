/*8. Student Grade
Logic:
Assign grade based on marks range.
Example:
Input: 82
Output: Grade B*/

let marks = prompt("Enter the Marks: ");

if(marks <= 100 && marks >= 85){
	console.log("Grade A");
}
else if(marks <= 84 && marks >= 75){
	console.log("Grade B");
}
else if(marks <= 74 && marks >= 55){
	console.log("Grade C");
}
else{
	console.log("Grade D");
}