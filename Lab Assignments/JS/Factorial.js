/*16. Factorial
Logic:
Multiply numbers from 1 to N.
Example:
Input: 5
Output: 120*/

let input = 5;
let fact = 1;
while(input != 0){
    fact = fact * input;
    input--;
}
console.log(fact);