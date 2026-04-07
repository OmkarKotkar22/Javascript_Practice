/*15. Sum of First N Numbers
Logic:
Add numbers from 1 to N.
Example:
Input: 5
Output: 15
*/

let input = 5;
let n = 5;
let sum = 0;
while(input != 0){
    sum = sum + input;
    input--;
}
console.log(sum);