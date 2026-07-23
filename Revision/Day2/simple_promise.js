/*Q1. Simple Promise
Problem: Create a promise that resolves with "Done" after 2 seconds.*/

let p = new Promise(function(resolve, reject){
    console.log("Wait 2 sec");
    setTimeout(function(){
        resolve("Done");
    },2000)
});

p.then(function(result){
    console.log(result);
});