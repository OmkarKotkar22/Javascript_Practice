/*23. Prime Numbers up to N
Logic:
Check each number from 1 to N.
Example:
Input: 10
Output: 2 3 5 7*/

let input = 10;

for(let i = 2; i <= input; i++){
    let flag = true;
    
    for(let j = 2; j <= Math.sqrt(i); j++){
        if(i % j == 0){
            flag = false;
        }
    }
    
    if(flag){
        console.log(i);
    }
}
