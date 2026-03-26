function show(x){
    if(x!=0){
        console.log("Good Morning");
        show(x-1);
    }
}

show(5);