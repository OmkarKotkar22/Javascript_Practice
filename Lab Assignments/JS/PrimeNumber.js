/*22. Prime Number
Logic:
Check divisibility from 2 to n-1 (or √n).
Example:
Input: 7
Output: Prime*/

let input = 7;
let flag = true;
if(input % 2 == 0){
    flag = false;
}

if(flag){
    console.log("Prime");
}
else{
    console.log("not");
}