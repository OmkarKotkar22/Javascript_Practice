let a = new Array(10, 20, 30, 40, 50);
let len = a.length;

console.log("Forward Travesal: ");
for(let i = 0; i <  len; i++){
    console.log(a[i]);
}

console.log("Backward Traversal: ");
for(let i = len-1; i >= 0; i--){
    console.log(a[i]);
}

