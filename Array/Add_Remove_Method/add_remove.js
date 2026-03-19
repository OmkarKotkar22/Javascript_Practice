let a = new Array(10, 20, 30, 40, 50, 60);

// push method
a.push(70);
console.log(a);
// Output: [ 10, 20, 30, 40, 50, 60, 70 ]

//pop method
a.pop();
console.log(a);
// Output : [ 10, 20, 30, 40, 50, 60 ]

//shift method
a.shift();
console.log(a);
// Output : [ 20, 30, 40, 50, 60 ]

a.unshift(5);
console.log(a);
//Output : [ 5, 20, 30, 40, 50, 60 ]

a.splice(1,1,99);
console.log(a);
//Output : [ 5, 99, 30, 40, 50, 60 ]