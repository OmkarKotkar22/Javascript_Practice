let sum = (...x) =>{
    let s = 0;
    for(let i = 0; i < x.length; i++){
        s = s + x[i];
    }
    return s;
}

let result = sum(1,1,1,1,1,1,1);
console.log(result);

let s = `Hello
dsse
ffffz${result}`;
console.log(s);

let x = 5 - "2";
console.log(x);