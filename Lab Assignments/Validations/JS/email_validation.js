let isValid = false;

function checkEmail(str){
    let span = document.getElementById("s");
    isValid = false;
    if(str.length == 0){
        span.innerHTML = "Please Enter Email";
        span.style.color = "red";
        return;
    }

    let atCount = 0;
    let atIndex = -1;
    let dotIndex = -1;

    for (let index = 0; index < str.length; index++) {
        let ch = str.charAt(index);

        if(ch == '@'){
            atCount++;
            atIndex = index;
        }
        if(ch == '.' && atIndex != -1 && index > atIndex){
            dotIndex = index;
        }

        let ascii = str.charCodeAt(index);
        if(!((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122) || (ascii >= 48 && ascii <= 57) || ch == '.' || ch == '@' || ch == '_')){
            span.innerHTML = "Invalid charcter in Email";
            span.style.color = "red";  
            return; 
        }
    }
    if(atCount != 1){
        span.innerHTML = "Email must contains only one '@'";
        span.style.color= "red";
        return;
    }
    if(atIndex == 0 || atIndex == str.length-1){
        span.innerHTML = "'@' can not first or last";
        span.style.color= "red";
        return;
    }
    if(dotIndex == -1){
        span.innerHTML = "'.' must present after '@'";
        span.style.color= "red";
        return;
    }
    if(dotIndex == atIndex+1){
        span.innerHTML = "'.' not immdiately after '@'";
        span.style.color= "red";
        return;
    }
    if(dotIndex == str.length - 1){
        span.innerHTML = "Dot cannot be last";
        span.style.color= "red";
        return;
    }
    span.innerHTML = "Valid Email";
    span.style.color = "Green";
    isValid = true;
}

function submitForm(){
    if(isValid){
        alert("Email submitted Successfully ");
    }
    else{
        alert("Entered Invalid Email");
    }
}