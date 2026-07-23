/*27. Inverted Triangle
Logic:
Decrease stars per row.
Example:
****
***
**
*
*/

for(let i = 1; i <= 4; i++){
    for(let j = 4; j >= 1; j--){
        if(i <= j){
            process.stdout.write("*");
        }
    }
    console.log(" ");
}