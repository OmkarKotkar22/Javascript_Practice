let isValid = false;

function checkDriving(str){
    isValid = false;

    str = str.replace(" ", "");
    let span = document.getElementById("s");

    if(str.length != 15){
        span.innerHTML = "DL must contains 15 or 16 characters";
        span.style.color = "red";
        return;
    }

    for(let i = 0; i < 2 ; i++){
        let ch = str.charCodeAt(i);
        if(!((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122))){
            span.innerHTML = "DL must State Code";
            span.style.color="red";
            return;
        } 
    }

    for(let i = 2; i < 4; i++){
        let ch = str.charCodeAt(i);
        if(!(ch >=48 && ch <=57)){
            span.innerHTML = "Invalid RTO Code";
            span.style.color = "red";
            return;
        }
    }

    for(let i = 4; i < 8; i++){
        let ch = str.charCodeAt(i);
        if(!(ch>=48 && ch <= 57)){
            span.innerHTML = "Invalid Year";
            span.style.color="red";
            return;
        }
    }

    for(let i = 9; i < str.length; i++){
        let ch = str.charCodeAt(i);
        if(!(ch >= 48 && ch <= 57)){
            span.innerHTML = "Invalid Unique Number";
            span.style.color = "red";
            return;
        }
    }

    span.innerHTML = "Valid Driving Licence";
    span.style.color = "green";
    isValid = true;

}

function submitForm(){
    if(isValid){
        alert("Driving Licence Number Submitted");
    }
    else{
        alert("Invalid DL");
    }
}