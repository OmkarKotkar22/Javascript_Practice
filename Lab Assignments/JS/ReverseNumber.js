/*19. Reverse Number
Logic:
Extract digits and rebuild reversed number.
Example:
Input: 123
Output: 321*/

let no = 123;
let rev = 0;
while(no != 0){
    rem = no % 10;
    rev = rev * 10 + rem;
    no = Math.floor(no / 10);
}
console.log(rev);