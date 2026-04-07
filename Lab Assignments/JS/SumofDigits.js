/*21. Sum of Digits
Logic:
Add each digit of number.
Example:
Input: 123
Output: 6*/

let input = 123;
let sum = 0;
while(input != 0){
    rem = input % 10;
    sum = sum + rem;
    input = Math.floor(input / 10);
}
console.log(sum);