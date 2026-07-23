
let promise = new Promise(function(resolve, reject){
        let a = 1 + 1;
        if(a == 2){
            resolve("success");
        }
        else{
            reject("failed");
        }
});
promise.then(function(result){
        console.log(result);
}).catch(function(err){
        console.log(err);
});