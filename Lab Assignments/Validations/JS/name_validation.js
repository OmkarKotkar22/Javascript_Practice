function user(str) {
    let span = document.getElementById("alert");
    if(str.length == 0){
        span.innerHTML="Enter the Valid Name";
        span.style.color="red";
    }
    else{
        let flag = false;
        for(let i = 0; i < str.length; i++){
            let ascii = str.charCodeAt(i);
            if(!((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122))){
                flag = true;
                break;
            }
        }
        if(flag){
            span.innerHTML = "Not another Character Allowed";
            span.style.color="red";
        }
        else{
            span.innerHTML = "Valid Name";
            span.style.color="green";
        }
    }
}