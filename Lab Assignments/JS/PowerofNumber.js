/*28. Power of Number
Logic:
Multiply base repeatedly exponent times.
Example:
Input: 2^3
Output: 8*/

let base = 2;
let expo = 3;
let op = 1;
while(expo != 0){
    op = op * base;
    expo--;
}
console.log(op);
