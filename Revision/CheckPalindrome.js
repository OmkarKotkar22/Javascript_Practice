/*20. Palindrome
Logic:
Reverse number and compare with original.
Example:
Input: 121
Output: Palindrome*/

let input = 121;
let temp = input;
let rev = 0, rem = 0;
while(input != 0){
    rem = input % 10;
    rev = rev * 10 + rem;
    input = Math.floor(input / 10);
}

if(temp == rev){
    console.log("palindrome");
}
else{
    console.log("Not");
}