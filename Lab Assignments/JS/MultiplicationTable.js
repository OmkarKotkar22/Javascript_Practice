/*17. Multiplication Table
Logic:
Multiply number with 1–10.
Example:
Input: 3
Output: 3, 6, 9 ... 30
*/

let input = 3;
let final = 10;
for(let i = 1; i <= final; i++){
    input = i * input; 
    console.log(input);
    input = 3;
}