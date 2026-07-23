/*24. Fibonacci Series
Logic:
Next number = sum of previous two.
Example:
Input: 5
Output: 0 1 1 2 3
*/

let i = 0;
let j = 1;
let n =1;
let sum = 0;
console.log(i);

while(n != 5){
    sum = i + j;
    i = j;
    j = sum;
    console.log(i);
    n++;
}