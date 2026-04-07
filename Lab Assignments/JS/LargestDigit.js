/*25. Largest Digit
Logic:
Extract digits and compare.
Example:
Input: 5832
Output: 8*/

let input = 5832;
let max = 0;
while(input != 0){
    rem = input % 10;
    if(rem > max){
        max = rem;
    }
    input = Math.floor(input / 10);
}
console.log(max);