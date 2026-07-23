/*18. Count Digits
Logic:
Divide number by 10 repeatedly and count steps.
Example:
Input: 1234
Output: 4 digits
*/

let no = 1234;
let count = 0;

while(no != 0){
    no = Math.floor(no / 10);

        count++;
   
}
console.log(count);