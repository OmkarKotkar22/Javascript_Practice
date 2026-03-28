let isValid = false;

function checkPan(str) {
    isValid= false;
    let span = document.getElementById("s");
    if(str.length != 10){
        span.innerHTML = "Invalid Length";
        span.style.color="red";
        return;
    }

    for(let i = 0; i < 5; i++){
        let ascii = str.charCodeAt(i);
        if(!((ascii >= 65 && ascii <=90) || (ascii >= 97 && ascii <= 122))){
            span.innerHTML = "First 5 must be alphabet";
            span.style.color= "red";
            return;
        }
    }

    for(let i = 5; i < 8; i++){
        let ascii = str.charCodeAt(i);
        if(!(ascii >= 48 && ascii <=57)){
            span.innerHTML = "Next 4 must be digits";
            span.style.color = "red";
        }
    }

    let last = str.charCodeAt(9);
    if(!(last>=65 && last <= 90)){
        span.innerHTML = "Last must be alphabet";
        span.style.color = "red";
        return;
    }

    span.innerHTML = "Pan Card Number is Valid";
    span.style.color= "green";
    isValid=true;
}

function submitForm(){
    if(isValid){
        alert("Pan Card Number Submitted");
    }
    else{
        alert("Not valid Pan Number");
    }
}