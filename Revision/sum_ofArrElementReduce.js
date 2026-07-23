/*Q1. Sum of Array
Problem: Find sum of numbers in array [1, 2, 3, 4, 5] using .reduce().*/

let a = [1,2,3,4,5];

let sum = a.reduce((acc, red) => acc+red, 0);
console.log("Sum is: "+ sum);