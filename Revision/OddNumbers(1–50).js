/*14. Odd Numbers (1–50)
Logic:
Print numbers not divisible by 2 in range.
Example Output:
1 3 5 7... 49*/

let first = 1;
let last = 50;

while(first <= 50){
    if(first % 2 != 0){
        console.log(first);
    }
    first++;
}