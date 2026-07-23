/*13. Even Numbers (1–50)
Logic:
Print numbers divisible by 2 in range.
Example Output:
2 4 6 ... 50*/

let first = 1;
let last = 50;

while(first <= 50){
    if(first % 2 == 0){
        console.log(first);
    }
    first++;
}