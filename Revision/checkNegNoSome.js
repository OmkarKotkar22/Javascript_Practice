/*Q6. Check Some Negative
Problem: Check if some numbers in [1,-2,3] are negative using .some().*/

let a = [1,-2,3];
let neg = a.some(num => num < 0);
console.log(neg);