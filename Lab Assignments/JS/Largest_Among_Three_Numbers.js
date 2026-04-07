/*3. Largest Among Three Numbers
Logic:
Compare all three numbers using conditions.
Example:
Input: 5, 9, 3
Output: Largest is 9*/

const input = require("readline");
const z = input.createInterface({
	input : process.stdin,
	output : process.stdout
});

z.question("Enter the First Number: ", function(n1){
	z.question("Enter the Second Number: ", function(n2){
		z.question("Enter the Third Number: ", function(n3){
			let a = parseInt(n1);
			let b = parseInt(n2);
			let c = parseInt(n3);

			let largest;
			if(a > b && a > c){
				console.log(a + " is the largest");
			}
			else if(b > a && b > c){
				console.log(b + " is the largest");
			}
			else{
				console.log(c + " is the largest");	
			}
		z.close();
		});
	});
});