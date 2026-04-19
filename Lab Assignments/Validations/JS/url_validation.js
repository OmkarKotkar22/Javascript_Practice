function url(str){
    let span = document.getElementById("alert");
    str = str.trim();

    if(str.length == 0){
        span.innerHTML="Field should not Empty";
        span.style.color = "red";
        return;
    }

    if(!(str.startsWith("http://") || str.startsWith("https://"))){
        span.innerHTML = "Must start with http:// or https://";
        span.style.color = "red";
        return;
    }

    let doFound = false;
    for(let i = 0; i< str.length; i++){
        let ch = str[i];
        let ascii = ch.charCodeAt(i);

        if(ch == '.'){
            doFound = true;
        }

        if(ch == ' '){
            span.innerHTML = "URL shouls not contain space";
            span.style.color = "red";
            return;
        }

        if(!(ascii >= 48 && ascii <= 57) && !(ascii >= 65 && ascii <= 90) && (ascii >= 97) && (ascii <= 122) && ascii != 46 && ascii != 47 && ascii != 58){
            span.innerHTML = "URL shold not contain spacial character";
            span.style.color = "red";
        }

        
    }
}